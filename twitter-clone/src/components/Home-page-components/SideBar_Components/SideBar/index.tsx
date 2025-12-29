import { Link } from "react-router-dom"

import { Follow, User } from "../../../../App"

import UserSectionComponent from "../UserSection"
import FollowsSectionComponent from "../FollowSection"

import { ButtonsContainer, PasswordButton, PostButton, SearchButton, SidebarArea, SideBarContainer } from "./styles"

type Props = {
    Create: boolean
    Search: boolean
    Edit: boolean

    user: User
    followingList: Follow[]
    followedList: Follow[]

    changeCreate: any
    changeSearch: any
    changeEdit: any
}

const SideBar = (
    {
        user, 
        followingList, 
        followedList, 
        Create, 
        changeCreate, 
        Search, 
        changeSearch, 
        changeEdit,
        Edit
    }: Props) => {

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

    const EditPasswordButton = () => {
        if (!Edit) {
            changeEdit(true)
        } else {
            changeEdit(false)
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
                        <UserSectionComponent 
                            username={user.username} 
                            id={user.id}
                        />
                        <PasswordButton onClick={e => EditPasswordButton()}>
                            Editar Senha
                        </PasswordButton>
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