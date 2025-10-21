//* This file will store useful functions that can be used anywhere inside of the project

import { apiFollows, apiPosts, apiUsers, Follow, User } from "../App"

// Function that executes a timeout after a set number of seconds
export const sleep = (s: number) => {
    // converting the seconds to milliseconds
    const ms = s * 1000
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Function that fetches every post from the api
export const fetchPostList = async () => {
    const response = await fetch(apiPosts.Get).then((response) => response.json())
    return response
}

// Function that returns an user id, based on the received username
// this function receives a 'username'(type: string) and returns an 'id'(type: number)
export const fetchUserIdWithUsername = async (username: string) => {
    const users = await fetch(apiUsers.Get)
        .then((response) => response.json())
        .then((response) => {
            return response
        })

    const targetUser: User | undefined = (users.filter((user: User) => user.username === username))[0]

    if (targetUser === undefined) {
        console.log("Target user is undefined")
        //* "TargetUser" is being returned as undefined at this point
        return targetUser
    } else {
        return targetUser.id
    }
}

// Function that fetches who the logged user follows and returns an array
export const fetchUserFollowingData = async (user: User) => {
    let followingData

    const filteredArray = await
        fetch(apiFollows.Get)
            .then((response) => response.json())
            .then((response: Follow[]) => {
                const result: Follow[] = response.filter((item: Follow) => item.user_id === user.id)
                return result
            })

    followingData = filteredArray

    return followingData
}

// Function that fetches who follows the logged user and returns an array
export const fetchUserFollowedData = async (user: User) => {
    let followedData

    const filteredArray = await
        fetch(apiFollows.Get)
            .then((response) => response.json())
            .then((response: Follow[]) => {
                const result: Follow[] = response.filter((item: Follow) => item.following_id === user.id)
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
                fetch(apiUsers.Get + id)
                    .then((response) => response.json())
            )
        ).then((responses: User[]) => {
                return responses
            })

    return result
}