import { ButtonsContainer, ExitButton, FriendsList, FriendsSection, PostButton, SidebarArea, SideBarContainer, UserSection } from "./styles"

const SideBar = () => {
    return (
        <SideBarContainer>
            <SidebarArea>
                <UserSection>
                    <h3>Seu nome de Usuário</h3>
                    <p>Id de usuário</p>
                    <button>Editar nome</button>
                </UserSection>
                <FriendsSection>
                    <button>Amigos (Online)</button>
                    <FriendsList>
                        <p>Fulano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                        <p>Siclano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                        <p>Fulano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                        <p>Siclano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                        <p>Fulano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                        <p>Siclano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                    </FriendsList>
                </FriendsSection>
                <ButtonsContainer>
                    <PostButton>Criar uma postagem</PostButton>
                    <ExitButton>Sair</ExitButton>
                </ButtonsContainer>
            </SidebarArea>
        </SideBarContainer>
    )
}

export default SideBar