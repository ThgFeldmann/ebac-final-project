import { useState } from "react"
import { apiUsers, User } from "../../../../App"
import { BioModal } from "./styles"
import { Result } from "../Edit_Password_Modal/styles"

type Props = {
    EditBio: boolean
    changeEditBio: any

    user: User
}

const EditBioModal = ({ user, EditBio, changeEditBio }: Props) => {
    const [newBio, setNewBio] = useState<string>("")
    const [success, setSuccess] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)

    const CloseEdit = () => {
        if (success) {
            window.location.reload()
        } else {
            setNewBio("")
            setSuccess(false)
            setFailed(false)
            changeEditBio(false)
        }
    }

    const PatchRequest = async (bio: string) => {

        const object = {
            bio: bio
        }

        console.log("Alterando o nome...")
        const response: any = await fetch(apiUsers.UpdateBio + user.id + "/", {
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
        if (newBio === "") {
            setFailed(true)
            return console.log("A entrada não existe.")
        } else {
            PatchRequest(newBio)
        }
    }

    return (
        <BioModal className={
                (EditBio) ? 
                    "unhidden" 
                : (EditBio && success) ?
                    "unhidden success"
                : 
                    ""
            }
        >
            {
                (!success && !failed) ?
                    <>
                        <h2>Escreva sua bio abaixo:</h2>
                        <input 
                            type="text" 
                            value={newBio}
                            onChange={e => setNewBio(e.target.value)}
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
                        <h2>A sua bio foi alterada com sucesso</h2>
                        <p>
                            Esta bio será usada em seu próximo login
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
                : 
                    null
            }
        </BioModal>
    )
}

export default EditBioModal