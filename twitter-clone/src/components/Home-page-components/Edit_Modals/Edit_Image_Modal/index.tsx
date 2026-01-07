import { useState } from "react"
import { apiUsers, User } from "../../../../App"
import { ImageModal } from "./styles"
import { Result } from "../Edit_Password_Modal/styles"

type Props = {
    EditImage: boolean
    changeEditImage: any

    user: User
}

const EditImageModal = ({ user, EditImage, changeEditImage }: Props) => {
    const [newImage, setNewImage] = useState<string>("")
    const [success, setSuccess] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)

    const CloseEdit = () => {
        if (success) {
            window.location.reload()
        } else {
            setNewImage("")
            setSuccess(false)
            setFailed(false)
            changeEditImage(false)
        }
    }

    const PatchRequest = async (image: string) => {

        const object = {
            image: image
        }

        console.log("Alterando o nome...")
        const response: any = await fetch(apiUsers.UpdateImage + user.id + "/", {
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
        if (newImage === "") {
            setFailed(true)
            return console.log("A entrada não existe.")
        } else {
            PatchRequest(newImage)
        }
    }

    return (
        <ImageModal className={
                (EditImage) ? 
                    "unhidden" 
                : (EditImage && success) ?
                    "unhidden success"
                : 
                    ""
            }
        >
            {
                (!success && !failed) ?
                    <>
                        <h2>Coloque sua nova foto abaixo:</h2>
                        <input 
                            type="file" 
                            value={newImage}
                            onChange={e => setNewImage(e.target.value)}
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
                        <h2>A sua foto foi alterada com sucesso</h2>
                        <p>
                            Esta foto será usada em seu próximo login
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
        </ImageModal>
    )
}

export default EditImageModal