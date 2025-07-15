import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { apiFollows, Follow, User } from "../../../../App"

import UserSectionComponent from "../UserSection"
import FollowsSectionComponent from "../FollowSection"

import { ButtonsContainer, PostButton, SidebarArea, SideBarContainer } from "./styles"

type Props = {
    user: User
    followingList: Follow[]
    followedList: Follow[]
}

const SideBar = ({user, followingList, followedList}: Props) => {
    // const [followingList, setFollowingList] = useState<Follow[]>([])
    // const [followedList, setFollowedList] = useState<Follow[]>([])

    // const location = useLocation()

    // const user: User = location.state.user

    // // Executes fetches on page render for the 'follow list' and 'followed' number
    // useEffect(() => {
    //     // Fetches the logged user follow cases
    //     fetch(apiFollows)
    //         .then((response) => response.json())
    //         .then((response) => {
    //             // Filters response based on who the logged user follows
    //             const followingListResult = response.filter((item: Follow) => item.userId === user.id)

    //             // Filters response based on who follows the logged user
    //             const followedListResult = response.filter((item: Follow) => item.followingId === user.id)

    //             setFollowingList(followingListResult)
    //             setFollowedList(followedListResult)
    //         })
    // }, [user, setFollowingList])

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
                            <Link to='/'>Sair</Link>
                        </ButtonsContainer>
                    </>
                }
            </SidebarArea>
        </SideBarContainer>
    )
}

export default SideBar