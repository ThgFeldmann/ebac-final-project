import { useState } from "react"

import PostComponent from "../Posts_Components/Post_Item"

import { Button, ButtonContainer, CreationAuthorArea, CreationContentArea, CreationItemContainer, CreationSectionContainer, GoBackButton, Headline, PreviewArea } from "./styles"
import { apiPosts, Follow, User } from "../../../App"

type Props = {
    changeCreate: any
    user: User
    followingList: Follow[]
}

export const CreationSection = ({ changeCreate, user, followingList }: Props) => {
    const [emptyFormError, setEmptyFormError] = useState<boolean>(false)

    const [formData, setFormData] = useState({
        author: user.username,
        author_id: user.id,
        content: ""
    })
    // const [imageUrl, setImageUrl] = useState<any>(null)
    const [success, setSuccess] = useState<boolean>(false)

    // const convertImage = (e: any) => {
    //     if (e.target.files && e.target.files[0]) {
    //         const img = URL.createObjectURL(e.target.files[0])
    //         return img
    //     }
    // }

    const handleSubmit = (e: any) => {
        // const img = convertImage(e)

        if (formData.content === "") {
            console.log("Por favor complete os campos.")
            setEmptyFormError(true)
        } else {
            console.log("starting post")
            fetch(apiPosts.Create, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
                .then(() => {
                    console.log("post successful")
                })
        }

        setSuccess(true)
    }

    const handleGoBack = () => {
        changeCreate(false)
        window.location.reload()
    }

    const handleReset = () => {
        setFormData({
            author: user.username,
            author_id: user.id,
            content: ""
        })
    }

    return (
        <CreationSectionContainer>
            <Headline>Crie sua postagem!</Headline>
            <CreationItemContainer>
                <CreationAuthorArea>
                    <h4>{user.username}</h4>
                </CreationAuthorArea>
                <CreationContentArea>
                    <label htmlFor="content">
                        Escreva sua postagem aqui:
                    </label>
                    <textarea 
                        id="content" 
                        name="content" 
                        autoComplete="off"
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                    />
                </CreationContentArea>
            </CreationItemContainer>
            <ButtonContainer>
                <Button
                    onClick={e => handleSubmit(e)} 
                    type="submit"
                >
                    Concluir
                </Button>
                <Button 
                    onClick={e => handleReset()}
                    type="reset" 
                    className="reset"
                >
                    Reiniciar
                </Button>
            </ButtonContainer>
            {
                (!success) ?
                null
                :
                <PreviewArea>
                    <h3>Preview</h3>
                    <PostComponent 
                        post={{
                            id: 0,
                            author: user.username,
                            author_id: user.id,
                            content: formData.content
                        }}
                        comments={[]}
                        followingList={followingList} 
                        user={user}                    
                    />
                    <p>
                        Este post foi criado com sucesso, você pode voltar agora.
                    </p>
                    <GoBackButton onClick={e => handleGoBack()}>
                        Voltar
                    </GoBackButton>
                </PreviewArea>
            }
            
        </CreationSectionContainer>
    )
}

export default CreationSection