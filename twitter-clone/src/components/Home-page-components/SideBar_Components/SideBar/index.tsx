import { Link } from "react-router-dom"

import { Follow, User } from "../../../../App"

import UserSectionComponent from "../UserSection"
import FollowsSectionComponent from "../FollowSection"

import { ButtonsContainer, AccountButton, PostButton, SearchButton, SidebarArea, SideBarContainer } from "./styles"

type Props = {
    Create: boolean
    Search: boolean
    Account: boolean

    user: User
    followingList: Follow[]
    followedList: Follow[]

    changeCreate: any
    changeSearch: any
    changeAccount: any
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
        Account,
        changeAccount,
    }: Props) => {

    const CreatePostButton = () => {
        if (!Create) {
            changeCreate(true)
        } else {
            changeCreate(false)
        }
    }

    const SearchUserButton = () => {
        if (!Search) {
            changeSearch(true)
        } else {
            changeSearch(false)
        }
    }

    const OpenAccountButton = () => {
        if (!Account) {
            changeAccount(true)
        } else {
            changeAccount(false)
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
                        {
                            (!Account) ?
                                <AccountButton onClick={e => OpenAccountButton()}>
                                    Perfil
                                </AccountButton>
                            :
                                <AccountButton className="accountGoBackButton" onClick={e => OpenAccountButton()}>
                                    Voltar
                                </AccountButton>
                        }
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