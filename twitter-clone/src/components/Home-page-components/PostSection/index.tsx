import Post from "../Post"
import { PostSectionContainer } from "./styles"

const PostSection = () => {
    return (
        <PostSectionContainer>
            <h4>Postagens mais recentes</h4>
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </PostSectionContainer>
    )
}

export default PostSection