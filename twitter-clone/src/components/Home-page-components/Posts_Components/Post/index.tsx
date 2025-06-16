import { Comment, Post } from "../../../../App"

import CommentComponent from "../Post-Commentary"

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
                    <img src={post.image} alt="Imagem não encontrada" />
                    <p>{post.content}</p>
                </PostContentArea>
                {post.comments.map((comment: Comment) => (
                    <div key={comment.commentId}>
                        <CommentComponent comment={comment} />
                    </div>
                ))}
            </PostContainer>
        </>
    )
}

export default PostComponent