//TODO fix the overlay not working on the special posts

import { useEffect, useState } from "react"

import { Modal, UserSection } from "./styles"
import { Overlay } from "../../../../styles"
import { apiUsers, User } from "../../../../App"

type Props = {
    username: string,
    id: number
}

const UserSectionComponent = ({ username, id }: Props) => {
    // Error states
    const [lenghtError, setLenghtError] = useState<boolean>(false)
    const [existsError, setExistsError] = useState<boolean>(true)

    // Main states
    const [editUsername, setEditUsername] = useState<boolean>(false)
    const [newUsername, setNewUsername] = useState<string>('')
    const [usernameExist, setUsernameExist] = useState<boolean>(false) // Default value is false, the check will work as intended
    const [success, setSuccess] = useState<boolean>(false)

    // Function that resets the error states on callback
    const resetErrors = () => {
        setLenghtError(false)
        setExistsError(false)
    }

    // Checks if the 'newUsername' exists inside the api on every re-render
    useEffect(() => {
        resetErrors()
        // checks if the 'newUsername' exists
        const checkUserName = () => {
            fetch(apiUsers.Get)
                .then((response) => response.json())
                .then((users) => {
                    const result: User = users.find(
                        (u: User) =>
                            u.username === newUsername
                    )
                    if (result) { //* IF USERNAME EXISTS
                        return setUsernameExist(true)
                    } else { //* IF USERNAME DOESN'T EXISTS
                        return setUsernameExist(false)
                    }
                })
        }

        checkUserName()
    }, [newUsername, usernameExist])

    // Handles the submit functions, mostly error checking
    // if no errors are found the PATCH request will execute
    const handleSubmit = (username: string) => { //* NOTE: THIS USERNAME IS THE SAME AS THE 'newUsername'

        // checks if the 'newUsername' is above the minimum digits
        if (newUsername.length <= 2) { //* IF 'newUsername' IS BELLOW MINIMUM
            console.log('Este nome é pequeno demais! Tente com no mínimo 3 dígitos')
            setLenghtError(true)
        } else if (usernameExist) { //* IF THE USERNAME EXISTS
            console.log('Username already exists!')
            return setExistsError(true)
        } else { //* IF 'newUsername' IS ABOVE MINIMUM DIGITS AND DOESN'T EXIST
            console.log('Username does not exist, changing your username.')
            fetch(apiUsers + '/' + id, { // Editing the username
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ // PATCH BODY
                    username
                })
            })
            setSuccess(true)
            resetErrors()
            setEditUsername(false)
        }
    }

    // Resets the states when edit is canceled
    const handleCancelEdit = () => {
        resetErrors()
        setEditUsername(false)
        setNewUsername('')
        setSuccess(false)
    }

    return (
        <>
            {
                (editUsername) ?
                    <Overlay />
                :
                    null
            }
            <UserSection>
                <h3>{username}</h3>
                <p>— {id} —</p>
                <button onClick={e => setEditUsername(true)}>Editar nome</button>
            </UserSection>
            { //* Edit username modal
                (!editUsername) ?
                null
                :
                <>
                    <Modal>
                        <h2>Digite abaixo seu novo nome de usuário:</h2>
                        <input
                            className={(!lenghtError) ? '' : 'error'}
                            min={2}
                            type="text"
                            required
                            autoComplete='off'
                            value={newUsername}
                            onChange={e => setNewUsername(e.target.value)}
                        />
                        {
                            (lenghtError) ?
                            <p className="error">Este nome não foi aceito.</p>
                            : (existsError) ?
                            <p className="error">Este nome já está em uso.</p>
                            : 
                            null
                        }
                        <div>
                            <button 
                                className="submit"
                                onClick={e => handleSubmit(newUsername)}
                                type="submit"
                            >
                                    Concluir
                                </button>
                            <button 
                                className="exit"
                                onClick={e => handleCancelEdit()} 
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