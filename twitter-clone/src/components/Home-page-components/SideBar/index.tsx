import { useState } from "react"

import { Link } from "react-router-dom"

import { ButtonsContainer, FriendsList, FriendsSection, PostButton, SidebarArea, SideBarContainer, UserSection } from "./styles"

const SideBar = () => {
    let [OnlineFriendsList, setOnlineFriendsList] = useState(true)
    let [OfflineFriendsList, setOfflineFriendsList] = useState(false)
    let [ClassName, setClassName] = useState('OnlineList')

    const ToggleFriendsList = () => {
        if (OnlineFriendsList === true) {
            setClassName('OfflineList')
            setOfflineFriendsList(true)
            setOnlineFriendsList(false)
        } 
        else if (OfflineFriendsList === true) {
            setClassName('OnlineList')
            setOnlineFriendsList(true)
            setOfflineFriendsList(false)
        }
    }

    return (
        <SideBarContainer>
            <SidebarArea>
                <UserSection>
                    <h3>Seu nome de Usuário</h3>
                    <p>Id de usuário</p>
                    <button>Editar nome</button>
                </UserSection>
                <FriendsSection>
                    <button className={ClassName} onClick={event => ToggleFriendsList()}>
                        {
                            (OnlineFriendsList === true) ?
                            'Amigos (Online)'
                            :
                            (OfflineFriendsList === true) ?
                            'Amigos (Offline)'
                            :
                            'Erro'
                        }
                    </button>
                    {
                        (OnlineFriendsList === true) ?
                        <FriendsList>
                            <p>Fulano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                            <p>Siclano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                            <p>Fulano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                            <p>Siclano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                            <p>Fulano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                            <p>Siclano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                        </FriendsList>
                        :
                        (OfflineFriendsList === true) ?
                        <FriendsList>
                            <p>Fulano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                            <p>Siclano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                            <p>Fulano deTal<span>&nbsp;&bull;&bull;&bull;</span></p>
                        </FriendsList>
                        :
                        <p>Não foi possível acessar sua lista de amigos!</p>
                    }
                    
                </FriendsSection>
                <ButtonsContainer>
                    <PostButton>Criar uma postagem</PostButton>
                    <Link to='/'>Sair</Link>
                </ButtonsContainer>
            </SidebarArea>
        </SideBarContainer>
    )
}

export default SideBar