import Post from "../Post"
import { PostSectionContainer } from "./styles"

const PostSection = () => {
    return (
        <PostSectionContainer>
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </PostSectionContainer>
    )
}

export default PostSection