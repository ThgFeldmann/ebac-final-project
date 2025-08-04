import { useEffect, useState } from "react"

import { apiFollows, Follow, Post } from "../../../../App"

import { PostDropdownContainer } from "./styles"
import { sleep } from "../../../../utils"

type Props = {
    state: boolean,
    set_posts: any,
    posts: Post[] | undefined,
    userId: number,
    postAuthorId: number,
    postAuthor: string,
    followingList: Follow[]
}

const PostDropdown = ({ state, set_posts, posts, userId, postAuthorId, postAuthor, followingList }: Props) => {
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

    const CreateFollow = (userId: number, authorId: number) => {
        console.log("starting post...")
        fetch(apiFollows, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                authorId
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
            console.log("starting delete request, id: ", delete_id)

            fetch(followURL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })

            if (!posts) {
                return null
            } else {
                //* this needs a functional back-end
                //? this kinda works, 
                //? but it removes a single post from 
                //? the delete follow and doesnt re-render
                const newPosts: Post[] = 
                    posts.filter(
                        (post: Post) => post.id !== delete_id
                    )

                set_posts(newPosts)
            }

            sleep(2)

            window.location.reload()
        } catch (error) { // IN CASE OF ERRORS
            console.log("error: ", error)
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

    const log = () => {
        fetch(apiFollows)
            .then((response) => response.json())
            .then((response) => console.log(response))
    }

    return (
        <>
            <PostDropdownContainer className={(!state) ? "" : "unhidden"}>
                <div>
                    <h3>{(!postAuthor) ?
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
                            Você mesmo
                        </h4>
                }
                <button onClick={e => log()}>
                    log follows
                </button>
            </PostDropdownContainer>
        </>
    )
}

export default PostDropdown