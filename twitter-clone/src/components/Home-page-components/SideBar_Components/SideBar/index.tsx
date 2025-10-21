import { Link } from "react-router-dom"

import { Follow, User } from "../../../../App"

import UserSectionComponent from "../UserSection"
import FollowsSectionComponent from "../FollowSection"

import { ButtonsContainer, PostButton, SearchButton, SidebarArea, SideBarContainer } from "./styles"

type Props = {
    Create: boolean
    changeCreate: any
    Search: boolean
    changeSearch: any
    user: User
    followingList: Follow[]
    followedList: Follow[]
}

const SideBar = ({user, followingList, followedList, Create, changeCreate, Search, changeSearch}: Props) => {

    const CreatePostButton = () => {
        if (!Create) {
            changeCreate(true)
        } else {
            changeCreate(false)
            window.location.reload()
        }
    }

    const SearchUserButton = () => {
        if (!Search) {
            changeSearch(true)
        } else {
            changeSearch(false)
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
                        <FollowsSectionComponent user={user} followingList={followingList} followedList={followedList} />
                        <ButtonsContainer>
                            {
                                (!Create) ?
                                    <PostButton onClick={e => CreatePostButton()}>
                                        Criar uma postagem
                                    </PostButton>
                                :
                                    <PostButton onClick={e => CreatePostButton()} className={(!Create) ? "" : "goBack"}>
                                        Voltar
                                    </PostButton>
                            }
                            <SearchButton onClick={e => SearchUserButton()}>
                                Procurar usuário
                            </SearchButton>
                            <Link to='/' reloadDocument >Sair</Link>
                        </ButtonsContainer>
                    </>
                }
            </SidebarArea>
        </SideBarContainer>
    )
}

export default SideBar