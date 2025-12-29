import { User } from "../../../../App"
import { PasswordModal } from "./styles"

type Props = {
    Edit: boolean
    changeEdit: any

    user: User
}

const EditPasswordModal = ({ user, Edit, changeEdit }: Props) => {
    
    const CloseEdit = () => {
        changeEdit(false)
    }
    
    return (
        <PasswordModal className={(Edit) ? "unhidden" : ""}>
            <h2>Digite a sua nova senha abaixo:</h2>
            <input type="password" />
            <div>
                <button 
                    className="submitButton"
                    type="submit"
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
        </PasswordModal>
    )
}

export default EditPasswordModal