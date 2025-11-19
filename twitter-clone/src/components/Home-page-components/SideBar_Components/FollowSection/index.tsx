import { useEffect, useState } from "react"

import { Follow, User } from "../../../../App"

import { FollowedUserItem, FollowInfo, FollowList, FollowSection } from "./styles"
import { fetchFollowingUsersData } from "../../../../utils"
import FollowModal from "../Follow_Modal"

type Props = {
    user: User
    followingList: Follow[]
    followedList: Follow[]
}

const FollowsSectionComponent = ({ user, followingList, followedList }: Props) => {
    // Dictates if the page is loading
    const [loading, setLoading] = useState<boolean>(true)
    // List of informations on who the user follows
    const [followingUsers, setFollowingUsers] = useState<User[]>([])

    const [modal, setModal] = useState<boolean>(false)
    const [followedUser, setFollowedUser] = useState<User>({
        id: 0,
        username: "",
        password: "",
        email: ""
    })

    // Fetches various users from the api with an array of id's
    const fetchData = async (idArray: number[]) => {
        const response = await fetchFollowingUsersData(idArray)
        setFollowingUsers(response)
    }

    const toggleModal = (followed_User: User) => {
        if (!modal) { //* SHOWING THE MODAL
            setFollowedUser(followed_User)
            setModal(true)
        } else { //* CLOSING THE MODAL
            // reseting the states
            setFollowedUser({
                id: 0,
                username: "",
                password: "",
                email: ""
            })
            setModal(false)
        }
    }

    //TODO work on this new function
    // // function that filters the following users
    // const filterFollows = (array_1: Follow[], array_2: Follow[]) => {
    //     const concatArray: Follow[] = array_1.concat(array_2)

    //     const idList: number[] = followingList.map(
    //         (item: Follow) => item.followingId
    //     )

    //     //TODO work on this
    //     const result = concatArray
    // }

    // Handles the follows list functions on render
    useEffect(() => {

        // list of the id of the users you follow
        const idList: number[] = followingList.map(
            (item: Follow) => item.following_id
        )

        // fetching users data from each id on the array
        fetchData(idList)

        // the component is not loading anymore at this point
        setLoading(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [followingList, followedList])

    return (
        <FollowSection>
            <FollowInfo>
                <h3>Seguindo: {followingList.length}</h3>
                <h4>Você é seguido por: {followedList.length}</h4>
            </FollowInfo>
            <FollowList>
                {
                    (loading) ?
                        <>
                            <div>
                                <ul>
                                    <li>
                                        Carregando...
                                    </li>
                                </ul>
                            </div>
                        </>
                    : (followingUsers.length >= 1) ?
                        followingUsers.map((followedUser: User) => (
                            <FollowedUserItem key={followedUser.id}>
                                <li>{followedUser.username}</li>
                                <button onClick={e => toggleModal(followedUser)}>
                                    &nbsp;&bull;&bull;&bull;
                                </button>
                            </FollowedUserItem>
                        ))
                    : (followingUsers.length === 0) ?
                        <>
                            <ul>
                                <li>Você não está seguindo ninguém no momento.</li>
                            </ul>
                        </>
                    :
                        <>
                            <ul>
                                <li>Não foi possível encontrar sua lista de seguidores.</li>
                            </ul>
                        </>
                }
                <FollowModal
                    state={modal}
                    user={user}
                    follow_user={followedUser}
                />
            </FollowList>
        </FollowSection>
    )
}

export default FollowsSectionComponent