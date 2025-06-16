import { Post } from "../../../../App"
import PostComponent from "../Post"
import { PostSectionContainer } from "./styles"

type Props = {
    post: Post[]
}

const PostSection = ({ post }: Props) => {
    return (
        <PostSectionContainer>
            {post.map((post) => (
                <div key={post.id}>
                    <PostComponent post={post} />
                </div>
            ))}
        </PostSectionContainer>
    )
}

export default PostSection