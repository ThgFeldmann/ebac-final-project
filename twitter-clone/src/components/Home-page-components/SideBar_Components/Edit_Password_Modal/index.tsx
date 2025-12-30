import { useState } from "react"
import { apiUsers, User } from "../../../../App"
import { PasswordModal, Result } from "./styles"

type Props = {
    Edit: boolean
    changeEdit: any

    user: User
}

const EditPasswordModal = ({ user, Edit, changeEdit }: Props) => {
    const [newPassword, setNewPassword] = useState<string>("")
    const [success, setSuccess] = useState<boolean>(true)
    const [failed, setFailed] = useState<boolean>(false)
    
    const CloseEdit = () => {
        if (success) {
            window.location.reload()
        } else {
            setNewPassword("")
            setSuccess(false)
            setFailed(false)
            changeEdit(false)
        }
    }

    const ValidatePassword = () => {
        if (newPassword !== user.password) {
            return true
        } else {
            console.log("Esta é a senha atual!")
            setFailed(true)
            return false
        }
    }

    const PatchRequest = async (password: string) => {

        const object = {
            password: password
        }

        console.log("Alterando a senha...")
        const response: any = await fetch(apiUsers.Update + user.id + "/", {
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

    const HandleSubmit = () => {

        if (newPassword === "") {
            setFailed(true)
            return console.log("A entrada não existe.")
        } else {
            const isValid: boolean = ValidatePassword()
    
            if (isValid) {
                PatchRequest(newPassword)
            }
        }
    }

    const HandleRetry = () => {
        setNewPassword("")
        setSuccess(false)
        setFailed(false)
    }

    return (
        <PasswordModal className={(Edit) ? "unhidden" : ""}>
            {
                (!success && !failed) ?
                    <>
                        <h2>Digite a sua nova senha abaixo:</h2>
                        <input 
                            type="password" 
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
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
                        <h2>A senha foi alterada com sucesso</h2>
                        <p>
                            Lembre de usar a nova senha em seu próximo login
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
                            Senha inválida, tente novamente
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
        </PasswordModal>
    )
}

export default EditPasswordModal