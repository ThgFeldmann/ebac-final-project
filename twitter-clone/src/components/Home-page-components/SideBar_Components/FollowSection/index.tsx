import { useEffect, useState } from "react"

import { apiUsers, Follow, User } from "../../../../App"

import { FollowedUserItem, FollowInfo, FollowList, FollowSection } from "./styles"
import { fetchFollowingUsersData } from "../../../../utils"

type Props = {
    followingList: Follow[],
    followedList: Follow[]
}

const FollowsSectionComponent = ({ followingList, followedList }: Props) => {
    // Dictates if the page is loading
    const [loading, setLoading] = useState<boolean>(true)
    // List of informations on who the user follows
    const [followingUsers, setFollowingUsers] = useState<User[]>([])

    // Fetches various users from the api with an array of id's
    const fetchData = async (idArray: number[]) => {
        const response = await fetchFollowingUsersData(idArray)
        setFollowingUsers(response)
    }

    // Handles the follows list functions on render
    useEffect(() => {

        // list of the id of the users you follow
        const idList: number[] = followingList.map((item: Follow) => item.followingId)

        // fetching users data from each id on the array
        fetchData(idList)

        // the component is not loading anymore at this point
        setLoading(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [followingList])

    const test = () => {
        console.log("following users: ", followingUsers)
    }

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
                            <button onClick={e => test()}>&nbsp;&bull;&bull;&bull;</button>
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
            </FollowList>
        </FollowSection>
    )
}

export default FollowsSectionComponent