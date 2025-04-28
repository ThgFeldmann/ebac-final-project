import Commentary from "../Post-Commentary"
import { PostContainer, PostContentArea, PostUserNameArea } from "./styles"

const Post = () => {
    return (
        <>
            <PostContainer>
                <PostUserNameArea>
                    <h4>Usuário que fez a postagem</h4>
                </PostUserNameArea>
                <PostContentArea>
                    <img src="https://placehold.co/500x200" alt="placeholder" />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum repellendus commodi eveniet deserunt iste perferendis voluptates dolorum quasi, autem voluptate velit explicabo hic nesciunt maiores fuga in nemo? Sint, earum.
                    </p>
                </PostContentArea>
                <Commentary />
                <Commentary />
            </PostContainer>
        </>
    )
}

export default Post