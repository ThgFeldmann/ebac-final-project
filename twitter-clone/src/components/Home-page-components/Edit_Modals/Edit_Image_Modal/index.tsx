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
    const [imageCode, setImageCode] = useState<any>("")
    const [newImage, setNewImage] = useState<any>()
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

        console.log(JSON.stringify(object))

        console.log("Alterando a imagem...")
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

    // Function that handles the image conversion to a base64 code string
    const imageConverter = (file: any) => {
        const reader = new FileReader()

        reader.onload = () => {
            setImageCode(reader.result)
        }

        reader.readAsDataURL(file)

        return true

    }

    const handleSubmit = () => {
        PatchRequest(imageCode)
    }

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0]

        if (selectedFile) {
            setNewImage(selectedFile)
            imageConverter(selectedFile)
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
                        <h2>Escolha sua nova foto abaixo:</h2>
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        {
                            (newImage) ?
                                <div>
                                    <p>
                                        foto selecionada
                                    </p>
                                </div>
                            :
                                null
                        }
                        <div className="buttonContainer">
                            <button 
                                className="submitButton"
                                type="submit"
                                onClick={e => handleSubmit()}
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