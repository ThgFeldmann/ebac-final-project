import { useEffect, useState } from "react"

import { apiUsers, Follow, Post, User } from "../../App"

import { PostModalContainer } from "./styles"
import { createFollow, deleteFollow, filterFollow, sleep } from "../../utils"

type Props = {
    state: boolean,
    post_type: "normal" | "special"
    set_posts?: any,
    posts?: Post[],
    logged_user_id: number,
    followingList: Follow[],
    data: {
        user_id: number,
        username: string
    }

    post_author_id: number
}

const PostModal = (
    { 
        state, 
        set_posts, 
        posts, 
        logged_user_id, 
        followingList, 
        post_type,
        data
    }: Props
) => {
    const [isFollowed, setIsFollowed] = useState<boolean>(false)
    const [isLoggedUser, setIsLoggedUser] = useState<boolean>(false)

    const [authorData, setAuthorData] = useState<User>()

    const fetchAuthorData = (author_id: number) => {
        /*
            Function that receives the 'post.author_id' as parameter
                executes a GET request using the 'author_id'
                receives a specific 'User' data, equal to the author
                updates the 'authorData' state with the request response (that is an User data)
        */

        fetch(apiUsers.Get + author_id + "/")
            .then((response) => response.json())
            .then((response: User) => {setAuthorData(response)})
    }

    // function that checks if the user is following the author of this post
    const CheckFollow = (followingList: Follow[], id: number) => {
        const exists: boolean = followingList.some((item: Follow) => item.following_id === id)

        if (!exists) {
            setIsFollowed(false)
            return false
        } else {
            setIsFollowed(true)
            return true
        }
    }

    // function that handles the 'unfollow'
    const RemoveFollow = (user_id: number, following_id: number) => {
        const target_follow = filterFollow(followingList, user_id, following_id)

        if (target_follow === undefined) {
            console.log("Error")
        } else {

            deleteFollow(target_follow.id)

            if (post_type === "normal") {
                RemovePosts(target_follow.id)
            }
    
            sleep(2)
    
            window.location.reload()
        }

    }

    // function that updates the posts feed when you unfollow someone
    const RemovePosts = (delete_id: number) => {
        if (!posts) {
            return null
        } else {
            const newPosts: Post[] = 
                posts.filter(
                    (post: Post) => post.id !== delete_id
                )

            set_posts(newPosts)
        }
    }

    // function that handles the button click
    const HandleClick = () => {

        console.log(data.user_id)

        const followed: boolean = CheckFollow(followingList, data.user_id)

        if (!followed) {
            createFollow(logged_user_id, data.user_id)
            setIsFollowed(true)
            
            sleep(2)
            
            window.location.reload()
        } else {
            RemoveFollow(logged_user_id, data.user_id)
        }
    }

    const ContainerClass = () => {
        if (state) {
            return "unhidden"
        } else {
            return ""
        }
    }

    useEffect(() => {
        fetchAuthorData(data.user_id)

        if (logged_user_id === data.user_id) {
            setIsLoggedUser(true)
        } else {

            if (post_type === "normal") {
                setIsFollowed(true)
            }

            setIsLoggedUser(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, logged_user_id, data.username, data.user_id, followingList, post_type])

    return (
        <>
            <PostModalContainer className={ContainerClass()}>
                <div>
                    {
                        (authorData?.image !== "") ?
                            <img src={authorData?.image} alt="profile_picture" />
                        :
                            <p className="imageError">Nenhuma imagem encontrada</p>
                    }
                    <h3>
                        {
                            (!data.username) ?
                                "não foi encontrado nenhum nome."
                            :
                                authorData?.username
                        }
                    </h3>
                    <p className="userBio">
                        {
                            (authorData?.bio !== "") ?
                                authorData?.bio
                            :
                                null
                        }
                    </p>
                </div>
                {
                    (!isLoggedUser) ?
                        <>
                            {
                                (!isFollowed) ?
                                    <h4 className="line_height">
                                        Você não está seguindo este usuário
                                    </h4>
                                :
                                    <h4 className="line_height">
                                        Você está seguindo este usuário
                                    </h4>
                            }
                            <div className="buttonContainer">
                                <button onClick={e => HandleClick()}>
                                    {
                                        (!isFollowed) ?
                                            "Seguir este usuário"
                                        :
                                            "Deixar de seguir"
                                    }
                                </button>
                            </div>
                        </>
                    :
                        <h4 className="logged_user">
                            Você
                        </h4>
                }
            </PostModalContainer>
        </>
    )
}

export default PostModal