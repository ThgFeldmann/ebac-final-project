import { FriendsSection, SideBarContainer, UserSection } from "./styles"

const SideBar = () => {
    return (
        <SideBarContainer>
            <UserSection>
                <h3>Seu nome de Usuário</h3>
                <p>Id de usuário</p>
                <button>Editar nome</button>
            </UserSection>
            <FriendsSection>
                <button>Amigos Online</button>
                <div>
                    <p>Fulano deTal <span>***</span></p>
                    <p>Siclano deTal <span>***</span></p>
                </div>
            </FriendsSection>
            <button>Criar uma postagem</button>
            <button>Sair</button>
        </SideBarContainer>
    )
}

export default SideBar