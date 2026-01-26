import { Follow, User } from "../../../../App"
import { deleteFollow, filterFollow } from "../../../../utils"

import { FollowModalContainer } from "./styles"

type Props = {
    state: boolean
    user: User
    follow_user: User
    following_list: Follow[]
}

const FollowModal = ({ state, user, follow_user, following_list }: Props) => {

    const handleClick = () => {

        /*
            Function that handles the 'onClick' effect, executing the functions
            'filterFollow' and 'deleteFollow', in order.
        */

        if (following_list === undefined) {
            console.log("Erro, lista não encontrada")
        } else {
            const target = filterFollow(following_list, user.id, follow_user.id)
            
            if (target !== undefined) {
                if (target.id > 0) { // checking if 'target' has any content
                    // executing the delete function with 'target.id' as its param
                    deleteFollow(target.id)
                } else {
                    console.log("error in target: ", target)
                }
            } else {
                console.log("Alvo não encontrado")
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