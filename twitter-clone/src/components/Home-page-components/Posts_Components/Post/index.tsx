import { Comment } from "../../../../App"

import CommentComponent from "../Post-Commentary"

import { PostContainer, PostContentArea, PostUserNameArea } from "./styles"

type Props = {
    id: number,
    author: string,
    image?: string,
    content?: string,
    comments: Comment[]
}

const PostComponent = ({ author, image, content, comments }: Props) => {
    return (
        <>
            <PostContainer>
                <PostUserNameArea>
                    <h4>{author}</h4>
                </PostUserNameArea>
                <PostContentArea>
                    <img src={image} alt="Imagem não encontrada" />
                    <p>{content}</p>
                </PostContentArea>
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <CommentComponent id={comment.id} author={comment.author} content={comment.content} />
                    </div>
                ))}
            </PostContainer>
        </>
    )
}

export default PostComponent