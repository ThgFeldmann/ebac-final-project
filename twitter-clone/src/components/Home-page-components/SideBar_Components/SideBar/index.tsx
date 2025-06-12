import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { apiFollows, Follow, User } from "../../../../App"

import FollowsSectionComponent from "../FollowSection"

import { ButtonsContainer, PostButton, SidebarArea, SideBarContainer, UserSection } from "./styles"

const SideBar = () => {
    const [followingList, setFollowingList] = useState<Follow[]>([])

    const location = useLocation()

    const user: User = location.state.user

    // Grabs the logged user follow list
    useEffect(() => {
        fetch(apiFollows)
            .then((response) => response.json())
            .then((response) => {
                const result = response.filter((item: Follow) => item.userId === user.id)
                setFollowingList(result) // Stores the list inside a state
            })
    }, [user, setFollowingList])

    // Test function, will be removed
    const test = () => {
        console.log("test sidebar followingList: ")
        console.log(followingList)
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
                        <UserSection>
                            <h3>{user.username}</h3>
                            <p>#{user.id}</p>
                            <button>Editar nome</button>
                        </UserSection>
                        <FollowsSectionComponent followList={followingList}/>
                        <ButtonsContainer>
                            <PostButton onClick={e => test()}>Criar uma postagem</PostButton>
                            <Link to='/'>Sair</Link>
                        </ButtonsContainer>
                    </>
                }
            </SidebarArea>
        </SideBarContainer>
    )
}

export default SideBar