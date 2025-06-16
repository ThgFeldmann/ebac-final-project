import { useEffect, useState } from "react"

import { apiUsers, Follow, User } from "../../../../App"

import { FollowedUserItem, FollowInfo, FollowList, FollowSection } from "./styles"

// Typing the props
type Props = {
    followList: Follow[], // Prop for the follow list cases and id's
    followedList: Follow[]
}

const FollowsSectionComponent = ({ followList, followedList }: Props) => {
    const [followingUsers, setFollowingUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const followingIdList: number[] = followList.map((item: Follow) => item.followingId)
    let usersList: User[] = []

    // Handles the follows list functions on render
    useEffect(() => {

        // Fetches a user with the received id
        const fetchData = (id: number) => {
            fetch(apiUsers + '/' + id) // GET request for the 'following' user
                .then((response) => response.json())
                .then((response: User) => {
                    usersList.push(response)
                    if (usersList.length === followList.length) {
                        setFollowingUsers(usersList)
                    }
                })
        }

        // Executes the 'fetchData' function with each element inside the passed array
        const forEachId = (idArray: number[]) => {
            idArray.forEach((id: number) => {
                fetchData(id)
            })
        }

        forEachId(followingIdList)

        setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [followList])

    return (
        <FollowSection>
            <FollowInfo>
                <h3>Seguindo: {followList.length}</h3>
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
                            <button>&nbsp;&bull;&bull;&bull;</button>
                        </FollowedUserItem>
                    ))
                : (followingUsers.length <= 0) ?
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