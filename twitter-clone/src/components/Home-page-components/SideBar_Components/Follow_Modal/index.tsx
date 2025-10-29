import { useState } from "react"
import { apiFollows, Follow, User } from "../../../../App"
import { deleteFollow, filterFollow } from "../../../../utils"

import { FollowModalContainer } from "./styles"

type Props = {
    state: boolean
    user: User,
    follow_user: User
}

const FollowModal = ({ state, user, follow_user }: Props) => {
    const [followList, setFollowList] = useState<Follow[]>()

    // Runs a GET request for the follow cases and filters then based on user and follow_user.
    const getFollow = () => {

        fetch(apiFollows.Get)
            .then((response) => response.json())
            .then((response) => setFollowList(response))
    }

    const handleClick = () => {

        /*
            Function that handles the 'onClick' effect, executing the functions: 
            'getFollow', 'filterFollow' and 'deleteFollow', in order.
        */

        // executing 'getFollow' function
        getFollow()

        if (followList === undefined) {
            console.log("error, followList is undefined")
        } else {
            const target = filterFollow(followList, user.id, follow_user.id)
            
            if (target !== undefined) {
                if (target.id > 0) { // checking if 'target' has any content
                    // executing the delete function with 'target.id' as its param
                    deleteFollow(target.id)
                } else {
                    console.log("error in target: ", target)
                }
            }
        }
        

        
    }

    return (
        <>
            <FollowModalContainer className={(!state) ? "" : "unhidden"}>
                <h3>
                    {follow_user.username}
                </h3>
                <div>
                    <button onClick={e => handleClick()}>
                        deixar de seguir
                    </button>
                </div>
            </FollowModalContainer>
        </>
    )
}

export default FollowModal