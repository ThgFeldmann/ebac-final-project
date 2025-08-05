import { useEffect, useState } from "react"

import { Comment, Follow, Post } from "../../../../App"

import CommentComponent from "../Post_Comment"
import PostDropdown from "../../../Dropdown_Components/Post_Dropdown"

import { DropdownOverlay } from "../../../../styles"
import { CreationContainer, PostActionArea, PostContainer, PostContentArea, PostUserNameArea } from "./styles"

type Props = {
    userId: number
    set_posts?: any
    posts?: Post[]
    post: Post
    comments: Comment[]
    followingList: Follow[]
}

const PostComponent = ({ userId, set_posts, posts, post, comments, followingList }: Props) => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [createComment, setCreateComment] = useState<boolean>(false)
    const [commentList, setCommentList] = useState<Comment[]>([])

    const filterComments = (commentArray: Comment[]) => {
        const result = commentArray.filter((comment: Comment) => comment.postId === post.id)
        setCommentList(result)
    }

    const toggleOverlay = () => {
        if (dropdown) {
            setDropdown(false)
        } else if (createComment) {
            setCreateComment(false)
        }
    }

    useEffect(() => {
        filterComments(comments)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post, comments])

    return (
        <>
            <DropdownOverlay onClick={e => toggleOverlay()} className={(dropdown || createComment) ? "overlay" : ""}/>
            <PostContainer>
                {/*TODO work on this */}
                <CreationContainer className={(!createComment) ? "" : "unhidden"}>
                    <label htmlFor="comment">
                        Crie seu comentário
                    </label>
                    <textarea name="comment" id="comment" />
                </CreationContainer>
                <PostUserNameArea>
                    <h4 onClick={e => setDropdown(true)}>{post.author}</h4>
                    <PostDropdown
                        state={dropdown}
                        post_type="normal"
                        set_posts={set_posts}
                        posts={posts}
                        userId={userId}
                        postAuthorId={post.authorId}
                        postAuthor={post.author}
                        followingList={followingList}
                    />
                </PostUserNameArea>
                <PostContentArea>
                    {
                        (post.image !== null) ?
                            <img src={post.image} alt={''} />
                        :
                            null
                    }
                    {/* <img src={(post.image !== null) ? post.image : ''} alt={(post.image !== null) ? "Imagem não encontrada" : ''} /> */}
                    <p>{post.content}</p>
                </PostContentArea>
                <PostActionArea>
                    <button onClick={e => setCreateComment(true)}>
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
                                <CommentComponent comment={comment} />
                            </div>
                        ))
                }
            </PostContainer>
        </>
    )
}

export default PostComponent