import { Comment } from '../../../../App'

import { CommentContentArea, CommentUserArea } from "./styles"

type Props = {
    comment: Comment
}

const CommentComponent = ({ comment }: Props) => {
    return (
        <div>
            <CommentUserArea>
                <h4>{comment.author}</h4>
            </CommentUserArea>
            <CommentContentArea>
                <p>{comment.content}</p>
            </CommentContentArea>
        </div>
    )
}

export default CommentComponent