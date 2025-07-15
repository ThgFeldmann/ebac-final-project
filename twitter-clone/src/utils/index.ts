//* This file will store useful functions that can be used anywhere inside of the project

import { apiFollows, apiPosts, apiUsers, Follow, Post, User } from "../App"

// Function that executes a timeout after a set number of seconds
export const sleep = (s: number) => {
    // converting the seconds to milliseconds
    const ms = s * 1000
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Function that display's a custom message | both in console and in return
export const showMessage = (message: string) => {
    console.log(message)
    return message
}

// Function that fetches every post from the api
export const fetchPostList = async () => {
    const response = await fetch(apiPosts).then((response) => response.json())
    return response
}

// Function that fetches an user based on the passed id and returns said user
export const fetchUserData = async (id: number) => {
    let user

    const foundUser = await
        fetch(apiUsers + '/' + id) // GET request for the 'following' user
            .then((response) => response.json())
            .then((user: User) => {
                return user
            })

    user = foundUser

    return user
}

// Function that fetches who the logged user follows and returns an array
export const fetchUserFollowingData = async (user: User) => {
    let followingData

    const filteredArray = await
        fetch(apiFollows)
            .then((response) => response.json())
            .then((response: Follow[]) => {
                const result: Follow[] = response.filter((item: Follow) => item.userId === user.id)
                return result
            })

    followingData = filteredArray

    return followingData
}

// Function that fetches who follows the logged user and returns an array
export const fetchUserFollowedData = async (user: User) => {
    let followedData

    const filteredArray = await
        fetch(apiFollows)
            .then((response) => response.json())
            .then((response: Follow[]) => {
                const result: Follow[] = response.filter((item: Follow) => item.followingId === user.id)
                return result
            })

    followedData = filteredArray

    return followedData
}

// Function that fetches informations of all the users the 'loggedUser' follows
// this function receives an id array
export const fetchFollowingUsersData = (idArray: number[]) => {
    const result = Promise.all(
            idArray.map((id: number) => 
                fetch(apiUsers + '/' + id)
                    .then((response) => response.json())
            )
        ).then((responses: User[]) => {
                return responses
            })

    return result
}

// export const fetchFollowingUsersPosts = (idArray: number[], postArray: Post[]) => {
//     const result = Promise.all(
//             idArray.map((id: number) => {
//                 const authorIdUrl = `https://echo-fake-api.vercel.app/posts?authorId=${id}`
//                 fetch(authorIdUrl)
//                     .then((response) => response.json())
//             })
//         ).then((responses: Post[]) => {
//                 return responses
//             })

//     return result
// }