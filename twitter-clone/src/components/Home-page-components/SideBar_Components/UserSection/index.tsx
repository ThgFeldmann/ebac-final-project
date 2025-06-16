import { useState } from "react"

import { Modal, UserSection } from "./styles"
import { Overlay } from "../../../../styles"
import { apiUsers } from "../../../../App"

type Props = {
    username: string,
    id: number
}

const UserSectionComponent = ({ username, id }: Props) => {
    const [editUsername, setEditUsername] = useState<boolean>(false)
    const [newUsername, setNewUsername] = useState('')

    const handleSubmit = () => {
        fetch(apiUsers + '/' + id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUsername),
        })
    }

    return (
        <>
            <UserSection>
                <h3>{username}</h3>
                <p>#{id}</p>
                <button onClick={e => setEditUsername(true)}>Editar nome</button>
            </UserSection>
            { // ****** MODAL
                (editUsername === false) ?
                null
                :
                <>
                    <Overlay />
                    <Modal>
                        <h2>Digite abaixo seu novo nome de usuário:</h2>
                        <input
                            type="text" 
                            required
                            autoComplete='off'
                            value={newUsername.username}
                            onChange={e => setNewUsername(e.target.value)}
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
                                onClick={e => setEditUsername(false)} 
                                type="button"
                            >
                                Cancelar
                            </button>
                        </div>
                    </Modal>
                </>
            }
        </>
    )
}

export default UserSectionComponent