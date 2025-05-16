import { CommentContentArea, CommentUserArea } from "./styles"

type Props = {
    id: number,
    author: string,
    content: string
}

const CommentComponent = ({ author, content }: Props) => {
    return (
        <div>
            <CommentUserArea>
                <h4>{author}</h4>
            </CommentUserArea>
            <CommentContentArea>
                <p>{content}</p>
            </CommentContentArea>
        </div>
    )
}

export default CommentComponent