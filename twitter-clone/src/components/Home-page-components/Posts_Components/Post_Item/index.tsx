import { Comment, Post } from "../../../../App"

import CommentComponent from "../Post_Comment"

import { PostContainer, PostContentArea, PostUserNameArea } from "./styles"

type Props = {
    post: Post
}

const PostComponent = ({ post }: Props) => {
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
                {(post.comments === null || undefined) ?
                    <div>
                        <h4>Este post ainda não tem comentários</h4>
                    </div>
                :
                    post.comments.map((comment: Comment) => (
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