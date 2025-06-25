//* This file will store useful functions that can be used anywhere inside of the project

import { apiFollows, apiUsers, Follow, User } from "../App"

// Function that display's a custom message | both in console and return
export const showMessage = (message: string) => {
    console.log(message)
    return message
}

// Function that fetches an user based on the passed id and returns said user
export const fetchUserData = (id: number) => {
    fetch(apiUsers + '/' + id) // GET request for the 'following' user
        .then((response) => response.json())
        .then((user: User) => {
            return user
        })
}

//? Possible functions
// // Function that fetches who the logged user follows
// export const fetchUserFollowingData = (user: User) => {
//     fetch(apiFollows)
//         .then((response) => response.json())
//         .then((response: Follow[]) => {
//             const followingListResult: Follow[] = response.filter((item: Follow) => item.userId === user.id)
//             return followingListResult
//         })
// }

// // Function that fetches who follows the logged user
// export const fetchUserFollowedData = (user: User) => {
//     fetch(apiFollows)
//         .then((response) => response.json())
//         .then((response) => {
//             const followedListResult = response.filter((item: Follow) => item.followingId === user.id)

//             return followedListResult
//         })
// }