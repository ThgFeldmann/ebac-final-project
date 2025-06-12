// import { useState } from "react"
// import { DropdownButton, FriendsList, FriendsSection, ToggleButton } from "./styles"
// import { FollowedUser } from "../../../../App"

// type Props = {
//     friend?: FollowedUser[]
// }

const FriendsSectionComponent = () => {
    // // The first two states dictates what list is being displayed
    // let [OnlineFriendsList, setOnlineFriendsList] = useState(true)
    // let [OfflineFriendsList, setOfflineFriendsList] = useState(false)
    // let [ClassName, setClassName] = useState('OnlineList') // Sets the toggle button classname

    // // Function that handles the toggle between the friends list (online or offline)
    // const ToggleFriendsList = () => {
    //     if (OnlineFriendsList === true) {
    //         setClassName('OfflineList')
    //         setOfflineFriendsList(true)
    //         setOnlineFriendsList(false)
    //     } 
    //     else if (OfflineFriendsList === true) {
    //         setClassName('OnlineList')
    //         setOnlineFriendsList(true)
    //         setOfflineFriendsList(false)
    //     }
    // }
    
    return (
        <h1>hello world</h1>
        // <FriendsSection>
        //     <ToggleButton className={ClassName} onClick={event => ToggleFriendsList()}>
        //         {
        //             (OnlineFriendsList === true) ?
        //             'Amigos (Online)'
        //             :
        //             (OfflineFriendsList === true) ?
        //             'Amigos (Offline)'
        //             :
        //             'Error'
        //         }
        //     </ToggleButton>
        //     {
        //         (OnlineFriendsList === true) ?
        //         <FriendsList>
        //             {friend?.map((friends) => (
        //                 <div key={friends.id}>
        //                     <li>{friends.username}<DropdownButton>&nbsp;&bull;&bull;&bull;</DropdownButton></li>
        //                 </div>
        //             ))}
        //         </FriendsList>
        //         :
        //         (OfflineFriendsList === true) ?
        //         <FriendsList>
        //             {friend?.map((friends) => (
        //                 <div key={friends.id}>
        //                     <li>{friends.username}<DropdownButton>&nbsp;&bull;&bull;&bull;</DropdownButton></li>
        //                 </div>
        //             ))}
        //         </FriendsList>
        //         :
        //         <p>Não foi possível acessar sua lista de amigos!</p>
        //     }
        // </FriendsSection>
    )
}

export default FriendsSectionComponent