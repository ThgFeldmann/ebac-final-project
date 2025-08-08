import { User } from "../../../../App"

import { FollowModalContainer } from "./styles"

type Props = {
    state: boolean
    follow_user: User
}

const FollowModal = ({ state, follow_user }: Props) => {

    const handleClick = () => {
        //? returns code 500
        //? db.json is a read-only file, solution is the creation of a back-end
        const followURL = `https://echo-fake-api.vercel.app/follows/${follow_user}`
        fetch(followURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
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