import { Post } from "../../../../App"

import { SpecialPostContainer, SpecialPostContentArea, SpecialPostUserNameArea } from "./styles"


type Props = {
    post: Post
}

const SpecialPost = ({ post }: Props) => {
    return (
        <SpecialPostContainer>
            <SpecialPostUserNameArea>
                <h4>{post.author}</h4>
            </SpecialPostUserNameArea>
            <SpecialPostContentArea>
                <p>{post.content}</p>
            </SpecialPostContentArea>
        </SpecialPostContainer>
    )
}

export default SpecialPost