//TODO test the follow creation/delete
import { useEffect, useState } from "react"

import { apiFollows, Follow, Post } from "../../App"

import { PostModalContainer } from "./styles"
import { sleep } from "../../utils"

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

    //* Needs a back-end to be fully tested
    const CreateFollow = (user_id: number, following_id: number) => {
        fetch(apiFollows.Create, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id,
                following_id
            })
        }).then((response) => response.json())
        .then((response) => {
            if (response) {
                setIsFollowed(true)
            }
        })

        window.location.reload()
    }

    // function that handles the 'unfollow'
    const RemoveFollow = (user_id: number, following_id: number) => {

        // filtering the follow cases where the 'user_id' and the 'following_id' exists together
        const followCases: Follow[] = followingList.filter((item: Follow) => 
            item.user_id === user_id 
            && 
            item.following_id === following_id
        )

        // mapping the 'id' from the previous cases
        const followCase = followCases.map((item: Follow) => item.id)

        // grabbing the first 'id' from the previous array
        const delete_id = followCase[0]

        fetch(apiFollows.Delete + delete_id + "/", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })

        if (post_type === "normal") {
            RemovePosts(delete_id)
        }

        sleep(2)

        window.location.reload()
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
        const followed: boolean = CheckFollow(followingList, data.user_id)

        if (!followed) {
            CreateFollow(logged_user_id, data.user_id)
        } else {
            RemoveFollow(logged_user_id, data.user_id)
        }
    }

    const ContainerClass = () => {
        if (state) {
            if (isLoggedUser) {
                return "unhidden logged_user"
            } else {
                return "unhidden"
            }
        } else {
            return ""
        }
    }

    useEffect(() => {
        CheckFollow(followingList, data.user_id)
        if (logged_user_id === data.user_id) {
            setIsLoggedUser(true)
        } else {
            setIsLoggedUser(false)
        }
    }, [state, logged_user_id, data.username, data.user_id, followingList])

    return (
        <>
            <PostModalContainer className={ContainerClass()}>
                <div>
                    <h3>
                        {
                            (!data.username) ?
                                "não foi encontrado nenhum nome."
                            :
                                data.username
                        }
                    </h3>
                </div>
                {
                    (!isLoggedUser) ?
                        <>
                            <h4>
                                {(!isFollowed) ?
                                    "Você não está seguindo este usuário."
                                :
                                    "Seguindo."
                                }
                            </h4>
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