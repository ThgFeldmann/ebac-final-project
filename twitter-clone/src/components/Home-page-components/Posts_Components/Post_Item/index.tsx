import { useEffect, useState } from "react"

import { apiComments, apiLikes, Comment, Follow, Like, Post, User } from "../../../../App"

import CommentComponent from "../Post_Comment"
import PostModal from "../../../Post_Modal"

import { ModalOverlay } from "../../../../styles"
import { CreationContainer, PostActionArea, PostContainer, PostContentArea, PostUserNameArea } from "./styles"

type Props = {
    user: User
    set_posts?: any
    posts?: Post[]
    post: Post
    comments: Comment[]
    followingList: Follow[]
    likeList?: Like[]
}

const PostComponent = ({ user, set_posts, posts, post, comments, followingList, likeList }: Props) => {
    // states for the modals
    const [modal, setModal] = useState<boolean>(false)
    const [createComment, setCreateComment] = useState<boolean>(false)

    const [commentList, setCommentList] = useState<Comment[]>([])
    const [newComment, setNewComment] = useState<string>("")

    const [userLiked, setUserLiked] = useState<boolean>(false)
    const [postLikes, setPostLikes] = useState<Like[]>([])

    const resetStates = () => {
        setModal(false)
        setCreateComment(false)
        setCommentList([])
        setNewComment("")
        setUserLiked(false)
        setPostLikes([])
    }

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

    const CreateComment = async (body: any) => {
        try {
            const response = await fetch(apiComments.Create, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData?.detail || "Failed to create the comment")
            }

            const data = await response.json();
            console.log("Comment created")
            return data
        } catch (error) {
            console.error("Error creating comment: ", error)
            throw error
        }
    }

    // function that handles the comment creation
    const handleSubmit = async () => {
        const body = {
            author_id: user.id,
            author: user.username,
            content: newComment,
            post_id: post.id,
        }

        try {
            // creating the new comment
            // upon page reload, the new comments appear
            // the reload happens at the end of this function
            await CreateComment(body)

            toggleOverlay()
            
            setTimeout(() => {
                window.location.reload()
            }, 1500)

        } catch (error) {
            console.log(error)
        }
    }

    const handleCancel = () => {
        setNewComment("")
        toggleOverlay()
    }

    // function that counts the total likes for the current post
    const countPostLikes = () => {
        if (likeList === undefined) {
            console.log("This post does not have any likes")
        } else {
            const filteredLikes: Like[] = likeList?.filter(
                (item: Like) => 
                    item.post_id === post.id
            )

            setPostLikes(filteredLikes)

            return filteredLikes

        }
    }

    const createLike = () => {
        const object = {
            post_id: post.id,
            user_id: user.id
        }

        console.log("starting the POST request...")
        fetch(apiLikes.Create, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(object)
        })

        console.log("Like created")
        setUserLiked(true)

        setTimeout(() => {
            window.location.reload()
        }, 500)
    }

    const deleteLike = () => {

        const target: Like | undefined = postLikes.find((item: Like) =>
            item.post_id === post.id
            &&
            item.user_id === user.id
        )

        if (target !== undefined) {
            console.log("Starting the DELETE request...")

            fetch(apiLikes.Delete + target.id + "/", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            setTimeout(() => {
                window.location.reload()
            }, 500)
        } else {
            console.log("Target not found")
        }
    }

    const handleLikeButton = () => {
        if (!userLiked) { //* Create Like case
            createLike()
            setUserLiked(true)
        } else { //* Delete Like case
            deleteLike()
        }
    }

    const checkIfUserLikesPost = (likes: Like[]) => {

        const userLikes = likes.find((item: Like) =>
            item.user_id === user.id
        )

        if (userLikes !== undefined) {
            setUserLiked(true)
        }
    }

    useEffect(() => {
        resetStates()

        filterComments(comments)
        const likes: Like[] | undefined = countPostLikes()

        if (post.author_id !== user.id) {

            if (likes !== undefined) {
                // checkIfUserLike()
                checkIfUserLikesPost(likes)
            }
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post, comments])

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
                    <h4 onClick={e => setModal(true)}>{post.author}</h4>
                    {
                        (modal === true) ?
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
                                post_author_id={post.author_id}
                            />
                        :
                            null
                    }
                </PostUserNameArea>
                <PostContentArea>
                    <p>{post.content}</p>
                </PostContentArea>
                <PostActionArea>
                    <div>
                        <p>curtidas: {postLikes.length}</p>
                        {
                            (post.author_id !== user.id) ?
                                <>
                                    <button className="likeButton" onClick={e => handleLikeButton()}>
                                        {
                                            (!userLiked) ?
                                                "Curtir"
                                            :
                                                "Deixar de curtir"
                                        }
                                    </button>
                                </>
                            :
                                null
                        }
                        <button 
                            className={(!createComment) ? "" : "clicked"} 
                            onClick={e => setCreateComment(true)}
                        >
                            Comentar
                        </button>
                    </div>
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