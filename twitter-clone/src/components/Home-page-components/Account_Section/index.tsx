import { User } from "../../../App"
import { AccountContainer, SectionContainer } from "./styles"

type Props = {
    user: User

    EditUsername: boolean
    changeEditUsername: any

    EditPassword: boolean
    changeEditPassword: any

    EditBio: boolean
    changeEditBio: any

    EditImage: boolean
    changeEditImage: any
}

const AccountSection = ({ 
    user, 
    EditUsername, 
    changeEditUsername, 
    EditPassword, 
    changeEditPassword,
    EditBio,
    changeEditBio,
    EditImage,
    changeEditImage,
}: Props) => {

    const EditUsernameButton = () => {
        if (!EditUsername) {
            changeEditUsername(true)
        } else {
            changeEditUsername(false)
        }
    }

    const EditPasswordButton = () => {
        if (!EditPassword) {
            changeEditPassword(true)
        } else {
            changeEditPassword(false)
        }
    }

    const EditBioButton = () => {
        if (!EditBio) {
            changeEditBio(true)
        } else {
            changeEditBio(false)
        }
    }

    const EditImageButton = () => {
        if (!EditImage) {
            changeEditImage(true)
        } else {
            changeEditImage(false)
        }
    }

    return (
        <SectionContainer>
            <AccountContainer>
                <div className="imageContainer">
                    placeholder
                    {user.image}
                </div>
                <h2>{user.username}</h2>
                <div className="bioContainer">
                    <p>{user.bio}</p>
                </div>
                <div className="buttonContainer">
                    <button onClick={e => EditImageButton()}>
                        Editar Foto
                    </button>
                    <button onClick={e => EditUsernameButton()}>
                        Editar Nome
                    </button>
                    <button onClick={e => EditPasswordButton()}>
                        Editar Senha
                    </button>
                    <button onClick={e => EditBioButton()}>
                        Editar Bio
                    </button>
                </div>
            </AccountContainer>
        </SectionContainer>
    )
}

export default AccountSection