import { useEffect, useState } from "react"

import { Comment, Post } from "../../../../App"

import CommentComponent from "../Post_Comment"

import { PostContainer, PostContentArea, PostUserNameArea } from "./styles"

type Props = {
    post: Post
    comments: Comment[]
}

const PostComponent = ({ post, comments }: Props) => {
    const [commentList, setCommentList] = useState<Comment[]>([])

    const filterComments = (commentArray: Comment[]) => {
        const result = commentArray.filter((comment: Comment) => comment.postId === post.id)
        setCommentList(result)
    }

    useEffect(() => {
        filterComments(comments)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post, comments])

    return (
        <>
            <PostContainer>
                <PostUserNameArea>
                    <h4>{post.author}</h4>
                </PostUserNameArea>
                <PostContentArea>
                    {(post.image !== null) ?
                        <img src={post.image} alt={''} />
                    :
                        null
                    }
                    {/* <img src={(post.image !== null) ? post.image : ''} alt={(post.image !== null) ? "Imagem não encontrada" : ''} /> */}
                    <p>{post.content}</p>
                </PostContentArea>
                {(comments === null || undefined) ?
                    <div>
                        <h4>Este post ainda não tem comentários</h4>
                    </div>
                :
                    commentList.map((comment: Comment) => (
                        <div key={comment.commentId}>
                            <CommentComponent comment={comment} />
                        </div>
                    ))
                }
            </PostContainer>
        </>
    )
}

export default PostComponent