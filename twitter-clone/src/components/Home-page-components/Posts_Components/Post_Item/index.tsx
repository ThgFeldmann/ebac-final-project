import { useEffect, useState } from "react"

import { apiComments, Comment, Follow, Post, User } from "../../../../App"

import CommentComponent from "../Post_Comment"
import PostModal from "../../../Post_Modal"

import { ModalOverlay } from "../../../../styles"
import { CreationContainer, PostActionArea, PostContainer, PostContentArea, PostUserNameArea } from "./styles"
import { sleep } from "../../../../utils"

type Props = {
    user: User
    set_posts?: any
    posts?: Post[]
    post: Post
    comments: Comment[]
    followingList: Follow[]
}

const PostComponent = ({ user, set_posts, posts, post, comments, followingList }: Props) => {
    // states for the modals
    const [modal, setModal] = useState<boolean>(false)
    const [createComment, setCreateComment] = useState<boolean>(false)

    const [commentList, setCommentList] = useState<Comment[]>([])
    const [newComment, setNewComment] = useState<string>("")

    const filterComments = (commentArray: Comment[]) => {
        const result = commentArray.filter((comment: Comment) => comment.post_id === post.id)
        setCommentList(result)
    }

    // function that removes the overlay
    const toggleOverlay = () => {
        if (modal) {
            setModal(false)
        } else if (createComment) {
            setCreateComment(false)
        }
    }

    // function that handles the comment creation
    const handleSubmit = () => {
        const commentBody = {
            author_id: user.id,
            author: user.username,
            content: newComment,
            post_id: post.id,
        }

        try {
            // creating the new comment
            // upon page reload, the new comments appear
            // the reload happens at the end of this function
            fetch(apiComments.Create, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(commentBody)
            })

            sleep(3)
            toggleOverlay()
            sleep(2)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    const handleCancel = () => {
        setNewComment("")
        toggleOverlay()
    }

    useEffect(() => {
        filterComments(comments)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post, comments])

    const test = () => {
        console.log("posts data: ", posts)
        console.log("post data: ", post)
        console.log("post author id: ", post.author_id)
        setModal(true)
    }

    return (
        <>
            <ModalOverlay onClick={e => toggleOverlay()} className={(modal || createComment) ? "overlay" : ""}/>
            <PostContainer>
                <CreationContainer className={(!createComment) ? "" : "unhidden"}>
                    <label htmlFor="comment">
                        Escreva seu comentário logo abaixo
                    </label>
                    <textarea 
                        name="comment" 
                        id="comment"
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                        autoComplete="off"
                    />
                    <div>
                        <button onClick={e => handleSubmit()} className="finish">
                            Concluir
                        </button>
                        <button onClick={e => handleCancel()} className="cancel">
                            Cancelar
                        </button>
                    </div>
                </CreationContainer>
                <PostUserNameArea>
                    <h4 onClick={e => test()}>{post.author}</h4>
                    <PostModal
                        state={modal}
                        post_type="normal"
                        set_posts={set_posts}
                        posts={posts}
                        logged_user_id={user.id}
                        followingList={followingList}
                        data={{
                            user_id: post.author_id,
                            username: post.author
                        }}
                    />
                </PostUserNameArea>
                <PostContentArea>
                    <p>{post.content}</p>
                </PostContentArea>
                <PostActionArea>
                    <button className={(!createComment) ? "" : "clicked"} onClick={e => setCreateComment(true)}>
                        Comentar
                    </button>
                </PostActionArea>
                {
                    (comments === null || undefined) ?
                        <div>
                            <h4>Este post ainda não tem comentários</h4>
                        </div>
                    :
                        commentList.map((comment: Comment) => (
                            <div key={comment.id}>
                                <CommentComponent 
                                    comment={comment}
                                    post={post} 
                                    user={user} 
                                    followingList={followingList}                                />
                            </div>
                        ))
                }
            </PostContainer>
        </>
    )
}

export default PostComponent