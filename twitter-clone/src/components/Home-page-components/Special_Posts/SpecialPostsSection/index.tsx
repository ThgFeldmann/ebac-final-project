import { useEffect, useState } from "react"

import SpecialPost from "../SpecialPost"

import { SpecialPostsContainer, SpecialPostsArea } from "./styles"

import { apiPosts, Comment, Follow, Post } from "../../../../App"

type Props = {
    posts: Post[]
    comments: Comment[]
    followingList: Follow[]
    userId: number
}

const SpecialPostsSection = ({ posts, comments, followingList, userId }: Props) => {
    // posts that will be rendered
    const [validPosts, setValidPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    // function that sorts the 'postId's (from the comments) based on frequency
    const sortCommentsId = (array: number[]): number[] => {
        console.log("sort comments id function start...")
        console.log("parameter received: ", array)

        const freq: Record<number, number> = {}

        for (const id of array) {
            freq[id] = (freq[id] ?? 0) + 1
        }

        return Object.keys(freq)
            .map(Number)
            .sort((a, b) => freq[b] - freq[a] || b - a)
    }

    // function that fetches the posts based on the received array of ids
    const filterPosts = async (array: number[]) => {
        console.log("filter posts function start...")
        console.log("parameter received: ", array)

        // take top 6 postIds (no mutation)
        const topPostIds = array.slice(0, 6)

        console.log("top post ids:", topPostIds)

        // fetch posts in parallel
        const result: Post[] = await Promise.all(
            topPostIds.map(id =>
            fetch(apiPosts.Get + id).then(res => res.json())
            )
        )

        console.log("Valid posts:", result)

        setValidPosts(result)
    }

    useEffect(() => {
        setLoading(true)

        // mapping the the 'post_id's in every comment
        const mapIds = comments.map((comment: Comment) => comment.post_id)

        // sorting the mapped id's
        const sortArray: number[] = sortCommentsId(mapIds)

        console.log("sorted array: ", sortArray)

        // filtering the posts based on the sorted array
        filterPosts(sortArray)
        
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts])

    return (
        <SpecialPostsContainer>
            <div className="headliner">
                <h2>
                    Postagens mais comentadas
                </h2>
            </div>
            {
                (loading === true) ? //* IF LOADING
                <h4>Carregando...</h4>
                : (loading === false) ? //* IF THERE ARE VALID POSTS
                <SpecialPostsArea>
                    {
                        validPosts.map((post: Post) => {
                            return (
                                <span key={post.id}>
                                    <SpecialPost
                                        post={post} 
                                        followingList={followingList} 
                                        userId={userId}
                                    />
                                </span>
                            )
                        })
                    }
                </SpecialPostsArea>
                : //* IF THERE ARE NO VALID POSTS
                'Não foi encotrado nenhuma postagem com comentários!'
            }
        </SpecialPostsContainer>
    )
}

export default SpecialPostsSection