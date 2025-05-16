import { SpecialPostContainer, SpecialPostContentArea, SpecialPostUserNameArea } from "./styles"


const SpecialPost = () => {
    return (
        <SpecialPostContainer>
            <SpecialPostUserNameArea>
                <h4>Usuário que fez a postagem</h4>
            </SpecialPostUserNameArea>
            <SpecialPostContentArea>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptas beatae sequi soluta earum velit nulla officia repellendus, facilis nesciunt corrupti aspernatur veniam excepturi itaque adipisci ducimus harum fugiat possimus.
                </p>
            </SpecialPostContentArea>
        </SpecialPostContainer>
    )
}

export default SpecialPost