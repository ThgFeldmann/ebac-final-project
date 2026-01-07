import { useState } from "react"
import { apiUsers, User } from "../../../../App"
import { UsernameModal } from "./styles"
import { Result } from "../Edit_Password_Modal/styles"

type Props = {
    EditUsername: boolean
    changeEditUsername: any

    user: User
}

const EditUsernameModal = ({ EditUsername, changeEditUsername, user }: Props) => {
    const [newUsername, setNewUsername] = useState<string>("")
    const [success, setSuccess] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)

    const CloseEdit = () => {
        if (success) {
            window.location.reload()
        } else {
            setNewUsername("")
            setSuccess(false)
            setFailed(false)
            changeEditUsername(false)
        }
    }

    const PatchRequest = async (username: string) => {

        const object = {
            username: username
        }

        console.log("Alterando o nome...")
        const response: any = await fetch(apiUsers.UpdateUsername + user.id + "/", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object)
        }).then((response) => {return response})

        console.log("Operation returned status: ", response.status)

        if (response.status >= 200 && response.status < 300) {
            setSuccess(true)
        } else {
            setFailed(true)
        }
    }

    const ValidateUsername = () => {
        if (newUsername !== user.username) {
            return true
        } else {
            console.log("Este é o mesmo nome de usuário!")
            setFailed(true)
            return false
        }
    }

    const HandleSubmit = () => {
        if (newUsername === "") {
            setFailed(true)
            return console.log("A entrada não existe.")
        } else {
            const isValid: boolean = ValidateUsername()

            if (isValid) {
                PatchRequest(newUsername)
            }
        }
    }

    const HandleRetry = () => {
        setNewUsername("")
        setSuccess(false)
        setFailed(false)
    }

    return (
        <UsernameModal className={
                (EditUsername) ? 
                    "unhidden" 
                : (EditUsername && success) ?
                    "unhidden success"
                : 
                    ""
            }
        >
            {
                (!success && !failed) ?
                    <>
                        <h2>Digite o seu novo nome abaixo:</h2>
                        <input 
                            type="text" 
                            value={newUsername}
                            onChange={e => setNewUsername(e.target.value)}
                        />
                        <div>
                            <button 
                                className="submitButton"
                                type="submit"
                                onClick={e => HandleSubmit()}
                            >
                                Atualizar
                            </button>
                            <button 
                                className="cancelButton"
                                type="button"
                                onClick={e => CloseEdit()}
                            >
                                Cancelar
                            </button>
                        </div>
                    </>
                : (success && !failed) ?
                    <Result>
                        <h2>O nome foi alterado com sucesso</h2>
                        <p>
                            Este nome será usado em seu próximo login
                        </p>
                        <div>
                            <button
                                className="goBackButton"
                                type="button"
                                onClick={e => CloseEdit()}
                            >
                                Voltar
                            </button>
                        </div>
                    </Result>
                : (!success && failed) ?
                    <Result>
                        <h2>
                            Nome inválido, tente novamente
                        </h2>
                        <div>
                            <button
                                className="cancelButton"
                                type="button"
                                onClick={e => HandleRetry()}
                            >
                                Voltar
                            </button>
                        </div>
                    </Result>
                :
                    null
            }
        </UsernameModal>
    )
}

export default EditUsernameModal