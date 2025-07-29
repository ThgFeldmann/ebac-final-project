import { useEffect, useState } from "react"

import { apiFollows, Follow } from "../../../../App"

import { PostDropdownContainer } from "./styles"

type Props = {
    state: boolean,
    userId: number,
    postAuthorId: number,
    postAuthor: string,
    followingList: Follow[]
}

const PostDropdown = ({ state, userId, postAuthorId, postAuthor, followingList }: Props) => {
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

        const followCases: Follow[] = followingList.filter((item: Follow) => 
            item.userId === userId 
            && 
            item.followingId === followingId
        )

        const followCase = followCases.map((item: Follow) => item.caseId)

        const caseId = followCase[0]

        console.log("starting delete...")
        const followURL = `https://echo-fake-api.vercel.app/follows?caseId=${caseId}`
        fetch(followURL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
            // body: JSON.stringify({
            //     userId,
            //     followingId
            // })
        }).then((response) => response.json())
            .then((response) => console.log(response))
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
            </PostDropdownContainer>
        </>
    )
}

export default PostDropdown