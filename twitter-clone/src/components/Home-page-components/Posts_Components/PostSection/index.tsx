import { useEffect, useState } from "react"

import { Comment, Follow, Post, User } from "../../../../App"

import PostComponent from "../Post_Item"

import { PostSectionContainer } from "./styles"
import { sleep } from "../../../../utils"

type Props = {
    Create: boolean,
    user: User,
    posts: Post[],
    comments: Comment[],
    followingList: Follow[]
}

const PostSection = ({ user, posts, comments, followingList, Create }: Props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [validPosts, setValidPosts] = useState<Post[]>([])

    // Filtering the posts list for the logged user
    const filterLoggedUserPosts = (postArray: Post[]) => {
        const result: Post[] = postArray.filter((post: Post) => post.author_id === user.id)
        return result
    }

    // Fetches the 'following posts' from the api
    const fetchFollowingPosts = async (followArray: Follow[]) => {
        // maps the followingIds received from props
        const idList: number[] = followArray.map((item: Follow) => item.following_id)

        const result = await Promise.all(
            idList.map((id: number) => {
                const authorIdUrl = `https://echo-fake-api.vercel.app/posts?authorId=${id}`
                const res = fetch(authorIdUrl)
                    .then((response) => response.json())
                    .then((response) => {
                        return response
                    })
                return res
            })
        ).then((responses: Post[][]) => {
                return responses
            })

        const flattenedArray = result.flat()

        return flattenedArray
    }

    // Concats the 'userPosts' and the 'followingPosts' states into the 'validPosts' state
    const concatArrays = (array_1: Post[], array_2: Post[]) => {

        // concatenating both of the posts array into a single one
        let concatArray = array_1.concat(array_2)

        // storing the new array into a state
        setValidPosts(concatArray)
    }
    
    // Handles the above functions in an async way
    const HandlePostsFunctions = async () => {
        const array_1 = filterLoggedUserPosts(posts)

        const array_2 = await fetchFollowingPosts(followingList)

        sleep(2)

        concatArrays(array_1, array_2)
    }

    useEffect(() => {
        setLoading(true)

        HandlePostsFunctions()

        sleep(3)

        setLoading(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, posts, Create])

    return (
        <PostSectionContainer>
            <div>
                {(loading) ?
                    <div>
                        <h4>Carregando...</h4>
                    </div>
                : (validPosts.length === null || undefined) ?
                    <div>
                        <h2>Não foi localizado nenhum post em seu nome.</h2>
                    </div>
                :
                    validPosts.map((post: Post) => (
                        <div key={post.id}>
                            <PostComponent
                                user={user}
                                set_posts={setValidPosts}
                                posts={validPosts}
                                post={post}
                                comments={comments}
                                followingList={followingList}
                            />
                        </div>
                    ))
                }
            </div>
        </PostSectionContainer>
    )
}

export default PostSection