import { apiFollows, Follow, User } from "../../../../App"

import { FollowModalContainer } from "./styles"

type Props = {
    state: boolean
    user: User,
    follow_user: User
}

const FollowModal = ({ state, user, follow_user }: Props) => {
    // Runs a GET request for the follow cases and filters then based on user and follow_user.
    const getFollow = () => {
        console.log("Starting the GET Follow request...")
        /*
            Running a GET request for all follow cases and filtering them 
            based on user/follow_user data. 

            The fetch return is stored in a const named 'result' that is returned from this function
            'getFollow'.

        */
        const response = fetch(apiFollows.Get)
            .then((response) => response.json())
            .then((response) => {
                const result: Follow[] = response.filter((item: Follow) => 
                    item.user_id === user.id
                    &&
                    item.following_id === follow_user.id
                )

                if (result.length > 0) {
                    return result
                }
            })
        return response
    }

    /*
        Receives a 'target' param, and uses it's 'id' to perform a DELETE request on the
        specific follow case.
    */
    const deleteFollow = (id: number) => {
        console.log("Starting the DELETE request...")
        fetch(apiFollows.Delete + id + "/", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })

        window.location.reload()
    }

    const handleClick = async () => {
        console.log("handleClick function start")

        /*
            Function that handles the 'onClick' effect, executing the functions: 
            'getFollow' and 'deleteFollow', in order.
        */

        // executing 'getFollow' function and storing it's return in 'target' const
        let target: any = await getFollow()

        if (target !== undefined) {
            target = target[0]
            if (target.id > 0) { // checking if 'target' has any content
                // executing the delete function with 'target.id' as its param
                deleteFollow(target.id)
            } else {
                console.log("error in target: ", target)
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