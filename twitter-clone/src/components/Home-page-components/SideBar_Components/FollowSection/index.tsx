//*************NOTE
// THIS FILE IS IN DEVELOPMENT PHASE, NOT FINAL

import { useEffect, useState } from "react"

import { apiUsers, Follow, User } from "../../../../App"

import { FollowedUserItem, FollowList, FollowSection } from "./styles"

// Typing the props
type Props = {
    followList: Follow[] // Prop for the follow list cases and id's
}

const FollowsSectionComponent = ({ followList }: Props) => {
    const [idList, setIdList] = useState<Follow[]>(followList)
    const [followingUsers, setFollowingUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    // Handles the follows list functions on render
    useEffect(() => {
        // Fetches a user with the received id
        const fetchData = (id: number) => {
            fetch(apiUsers + '/' + id) // GET request for the 'following' user
                .then((response) => response.json())
                .then((response) => {
                    setFollowingUsers( // Place the response inside the 'followingUsers' array
                        [
                            ...followingUsers,
                            response
                        ]
                    )
                })
        }

        // Executes the 'fetchData' function with each element inside the received array
        const forEachId = (idArray: number[]) => {
            idArray.forEach((id: number) => {
                fetchData(id)
            })
        }

        // Handles the functions when the page is loading
        const handleLoader = () => {
            // Maps the "followingId" inside the "followList" and stores then inside a number array
            const followingIdList: number[] = idList.map((item: Follow) => item.followingId)

            forEachId(followingIdList)

            setLoading(false)
        }

        if (loading === true) {
            handleLoader()
        }
    }, [followList, followingUsers, loading, idList])

    const test = () => {
        console.log('followingUsers: ')
        console.log(followingUsers)
    }

    return (
        <FollowSection>
            <h3>Seguindo: {followList.length}</h3>
            <h4>Você é seguido por: xxx</h4>
            <button onClick={e => test()}>Test</button>
            <FollowList>
                {
                (followingUsers.length >= 1)
                ?
                    followingUsers.map((followedUser: User) => (
                        <FollowedUserItem key={followedUser.id}>
                            <li>{followedUser.username}</li>
                            <button>&nbsp;&bull;&bull;&bull;</button>
                        </FollowedUserItem>
                    ))
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

// possible structure
{/* <div>
    <h3>Pessoas que você segue: </h3>
    <ul>
        <li>Fulano</li>
        <li>Siclano</li>
        <li>Delano</li>
    </ul>
    <p>Pessoas que estão te seguindo: xxx</p>
</div> */}