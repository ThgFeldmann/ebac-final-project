import { Link } from "react-router-dom"

import { Follow, User } from "../../../../App"

import UserSectionComponent from "../UserSection"
import FollowsSectionComponent from "../FollowSection"

import { ButtonsContainer, PostButton, SidebarArea, SideBarContainer } from "./styles"

type Props = {
    user: User
    followingList: Follow[]
    followedList: Follow[]
}

const SideBar = ({user, followingList, followedList}: Props) => {
    return (
        <SideBarContainer>
            <SidebarArea>
                {(user == null ) ?
                    <div>
                        <p>Não foi possível encontrar um usuário conectado!</p>
                    </div>
                :
                    <>
                        <UserSectionComponent username={user.username} id={user.id} />
                        <FollowsSectionComponent followingList={followingList} followedList={followedList} />
                        <ButtonsContainer>
                            <PostButton>Criar uma postagem</PostButton>
                            <Link to='/' reloadDocument >Sair</Link>
                        </ButtonsContainer>
                    </>
                }
            </SidebarArea>
        </SideBarContainer>
    )
}

export default SideBar