import { useEffect, useState } from "react"

import { apiFollows, Follow, Post } from "../../App"

import { PostModalContainer } from "./styles"
import { sleep } from "../../utils"

type Props = {
    state: boolean,
    post_type: "normal" | "special"
    set_posts?: any,
    posts?: Post[],
    userId: number,
    postAuthorId: number,
    postAuthor: string,
    followingList: Follow[]
}

const PostModal = (
    { 
        state, 
        set_posts, 
        posts, 
        userId, 
        postAuthorId, 
        postAuthor, 
        followingList, 
        post_type 
    }: Props
) => {
    const [followed, setFollowed] = useState<boolean>(false)

    // function that checks if the user is following the author
    // of this post
    const CheckFollow = (followingList: Follow[], id: number) => {
        const exists: boolean = followingList.some((item: Follow) => item.followingId === id)

        if (!exists) {
            setFollowed(false)
        } else {
            setFollowed(true)
        }
    }

    //* Needs a back-end to be fully tested
    const CreateFollow = (userId: number, followingId: number) => {
        fetch(apiFollows.Create, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                followingId
            })
        })
    }

    const RemoveFollow = (userId: number, followingId: number) => {

        // filtering the follow cases where the 'userId' and the 'followingId'
        // exists together
        const followCases: Follow[] = followingList.filter((item: Follow) => 
            item.userId === userId 
            && 
            item.followingId === followingId
        )

        // mapping the 'id' from the previous cases
        const followCase = followCases.map((item: Follow) => item.id)

        // grabbing the first 'id' from the previous array
        const delete_id = followCase[0]

        const followURL = `https://echo-fake-api.vercel.app/follows/${delete_id}`

        try { // ATTEMPTING THE DELETE REQUEST
            //? the delete works only after a few page reloads
            //? with a back-end it may be fixed
            fetch(followURL, {
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
        } catch (error) { // IN CASE OF ERRORS
            console.log("error: ", error)
        }
    }

    //* this needs a functional back-end to be fully tested
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

    const HandleClick = () => {
        if (!followed) {
            CreateFollow(userId, postAuthorId)
        } else {
            RemoveFollow(userId, postAuthorId)
        }
    }

    useEffect(() => {
        CheckFollow(followingList, postAuthorId)
    }, [state, userId, postAuthor, postAuthorId, followingList])

    return (
        <>
            <PostModalContainer className={(!state) ? "" : "unhidden"}>
                <div>
                    <h3>
                        {
                            (!postAuthor) ?
                                "não foi encontrado nenhum nome!"
                            :
                                postAuthor
                        }
                    </h3>
                </div>
                {
                    (userId !== postAuthorId) ?
                        <>
                            <h4>
                                {(!followed) ?
                                    "Você não está seguindo este usuário"
                                :
                                    "Você está seguindo este usuário"
                                }
                            </h4>
                            <div>
                                <button onClick={e => HandleClick()}>
                                    {
                                        (!followed) ?
                                            "Seguir este usuário"
                                        :
                                            "Deixar de seguir"
                                    }
                                </button>
                            </div>
                        </>
                    :
                        <h4>
                            Você
                        </h4>
                }
            </PostModalContainer>
        </>
    )
}

export default PostModal