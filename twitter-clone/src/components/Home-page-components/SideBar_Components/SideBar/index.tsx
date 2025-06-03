import { Link, useLocation } from "react-router-dom"

import FriendsSectionComponent from "../FriendsSection"

import { ButtonsContainer, PostButton, SidebarArea, SideBarContainer, UserSection } from "./styles"

const SideBar = () => {

    const location = useLocation()

    const user = location.state.user

    return (
        <SideBarContainer>
            <SidebarArea>
                {(user == null ) ?
                    <div>
                        <p>Não foi possível encontrar um usuário conectado!</p>
                    </div>
                :
                    <>
                        <UserSection>
                            <h3>{user.username}</h3>
                            <p>#{user.id}</p>
                            <button>Editar nome</button>
                        </UserSection>
                        <FriendsSectionComponent friend={user.friends} />
                        <ButtonsContainer>
                            <PostButton>Criar uma postagem</PostButton>
                            <Link to='/'>Sair</Link>
                        </ButtonsContainer>
                    </>
                }
            </SidebarArea>
        </SideBarContainer>
    )
}

export default SideBar