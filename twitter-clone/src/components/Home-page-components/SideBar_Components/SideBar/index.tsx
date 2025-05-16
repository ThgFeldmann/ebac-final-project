import { Link } from "react-router-dom"
import { User } from "../../../../App"
import FriendsSectionComponent from "../FriendsSection"

import { ButtonsContainer, PostButton, SidebarArea, SideBarContainer, UserSection } from "./styles"

type Props = {
    user: User
}

const SideBar = ({ user }: Props) => {
    return (
        <SideBarContainer>
            <SidebarArea>
                <UserSection>
                    <h3>{user.username}</h3>
                    <p>{user.id}</p>
                    <button>Editar nome</button>
                </UserSection>
                <FriendsSectionComponent />
                <ButtonsContainer>
                    <PostButton>Criar uma postagem</PostButton>
                    <Link to='/'>Sair</Link>
                </ButtonsContainer>
            </SidebarArea>
        </SideBarContainer>
    )
}

export default SideBar