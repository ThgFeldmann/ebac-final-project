//TODO create a exit function for the 'cancel' button
import { useState } from "react"

import { User } from "../../../App"

import { Modal } from "./styles"
import { fetchUserIdWithUsername } from "../../../utils"

type Props = {
    Search: boolean
    user: User
}

const FollowUserModal = ({Search, user}: Props) => {

    // Error states

    // Main states
    const [searchUsername, setSearchUsername] = useState<string>("")
    const [success, setSuccess] = useState<boolean>(false)

    const handleSubmit = () => {
        const id = fetchUserIdWithUsername(searchUsername)
    }

    return (
        <>
            <Modal className={(Search) ? "unhidden" : ""}>
                <h2>Procure por um usuário:</h2>
                <input
                    min={2}
                    type="text"
                    required
                    value={searchUsername}
                    onChange={e => setSearchUsername(e.target.value)}
                />
                <div>
                    <button 
                        className="submit"
                        onClick={e => handleSubmit()}
                        type="submit"
                    >
                            Concluir
                        </button>
                    <button 
                        className="exit"
                        type="button"
                    >
                        Cancelar
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default FollowUserModal