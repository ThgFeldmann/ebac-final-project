import { useState } from "react"
import SpecialPost from "../SpecialPost"
import { SpecialPostsContainer, SpecialPostsArea } from "./styles"

const SpecialPostsSection = () => {
    let [PopularPostsList, setPopularPostsList] = useState(true)
    let [FriendsPostsList, setFriendsPostsList] = useState(false)
    
    const TogglePostsList = () => {
        if (PopularPostsList === true) {
            setPopularPostsList(false)
            setFriendsPostsList(true)
        } 
        else if (FriendsPostsList === true) {
            setPopularPostsList(true)
            setFriendsPostsList(false)
        }
    }

    return (
        <SpecialPostsContainer>
            <button onClick={event => TogglePostsList()}>
                {
                    (PopularPostsList === true) ?
                    'Postagens mais comentadas hoje'
                    :
                    (FriendsPostsList === true) ?
                    'Postagens de seus amigos'
                    :
                    'Postagens não encontradas'
                }
            </button>
            {
                (PopularPostsList === true) ?
                <SpecialPostsArea>
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                </SpecialPostsArea>
                :
                (FriendsPostsList === true) ?
                <SpecialPostsArea>
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                </SpecialPostsArea>
                :
                'Não foi possível acessar esta lista de postagens!'
            }
        </SpecialPostsContainer>
    )
}

export default SpecialPostsSection