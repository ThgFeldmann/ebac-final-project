import { useState } from "react"
import { FriendsList, FriendsSection } from "./styles"
import { Friend } from "../../../../App"

type Props = {
    friend?: Friend[]
}

const FriendsSectionComponent = ({ friend }: Props) => {
    let [OnlineFriendsList, setOnlineFriendsList] = useState(true)
    let [OfflineFriendsList, setOfflineFriendsList] = useState(false)
    let [ClassName, setClassName] = useState('OnlineList')

    // Function that handles the toggle between the friends list (online or offline)
    const ToggleFriendsList = () => {
        if (OnlineFriendsList === true) {
            setClassName('OfflineList')
            setOfflineFriendsList(true)
            setOnlineFriendsList(false)
        } 
        else if (OfflineFriendsList === true) {
            setClassName('OnlineList')
            setOnlineFriendsList(true)
            setOfflineFriendsList(false)
        }
    }
    
    return (
        <FriendsSection>
            <button className={ClassName} onClick={event => ToggleFriendsList()}>
                {
                    (OnlineFriendsList === true) ?
                    'Amigos (Online)'
                    :
                    (OfflineFriendsList === true) ?
                    'Amigos (Offline)'
                    :
                    'Erro'
                }
            </button>
            {
                (OnlineFriendsList === true) ?
                <FriendsList>
                    {friend?.map((friends) => (
                        <div key={friends.id}>
                            <li>{friends.username}<button>&nbsp;&bull;&bull;&bull;</button></li>
                        </div>
                    ))}
                </FriendsList>
                :
                (OfflineFriendsList === true) ?
                <FriendsList>
                    {friend?.map((friends) => (
                        <div key={friends.id}>
                            <li>{friends.username}<button>&nbsp;&bull;&bull;&bull;</button></li>
                        </div>
                    ))}
                </FriendsList>
                :
                <p>Não foi possível acessar sua lista de amigos!</p>
            }
        </FriendsSection>
    )
}

export default FriendsSectionComponent