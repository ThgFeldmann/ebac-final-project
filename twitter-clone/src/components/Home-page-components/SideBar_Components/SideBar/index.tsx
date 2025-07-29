import { Link } from "react-router-dom"

import { Follow, User } from "../../../../App"

import UserSectionComponent from "../UserSection"
import FollowsSectionComponent from "../FollowSection"

import { ButtonsContainer, PostButton, SidebarArea, SideBarContainer } from "./styles"

type Props = {
    Create: boolean
    changeCreate: any
    user: User
    followingList: Follow[]
    followedList: Follow[]
}

const SideBar = ({user, followingList, followedList, Create, changeCreate}: Props) => {

    const handleClick = () => {
        if (!Create) {
            changeCreate(true)
        } else {
            changeCreate(false)
            window.location.reload()
        }
    }

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
                            {
                                (!Create) ?
                                    <PostButton onClick={e => handleClick()}>
                                        Criar uma postagem
                                    </PostButton>
                                :
                                    <PostButton onClick={e => handleClick()} className={(!Create) ? "" : "goBack"}>
                                        Voltar
                                    </PostButton>
                            }
                            <Link to='/' reloadDocument >Sair</Link>
                        </ButtonsContainer>
                    </>
                }
            </SidebarArea>
        </SideBarContainer>
    )
}

export default SideBar