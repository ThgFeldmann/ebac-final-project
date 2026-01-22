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
    const SortComments = (array: number[]) => {

        // functions that check for frequency
        const freqMap: any = {}
        array.forEach(num => {
            freqMap[num] =
                (freqMap[num] || 0) + 1
        })

        const sortedArray = array.sort((a, b) => { // sorting the 'array' based on frequency
            if (freqMap[a] !== freqMap[b]) {
                return freqMap[b] - freqMap[a]
            } else { // IFF THE ARE NO REPEATED VALUES
                return b - a
            }
        })

        // adjusting the order of the values in the array, so that the more frequent a number is
        // the closer to the start of the array, it will be
        const formatArray = sortedArray.filter((item, index, self) => {
            return self.indexOf(item) === index
        })

        return formatArray
    }

    // function that fetches the posts based on the received array of ids
    const filterPosts = async (array: number[]) => {
        // selects the top six posts and removes the rest
        const splicedArray = array.splice(0, 6)

        // executing a fetch promise with every id in 'splicedArray'
        const result = await Promise.all(
            splicedArray.map((id: number) => 
                fetch(apiPosts.Get + id)
                    .then((response) => response.json())
            )
        ).then((responses: Post[]) => {
            // returning the collected posts in a 'Post[]' type
            return responses
        })

        console.log("Valid post: ", result)

        setValidPosts(result)
    }

    const handleLoading = () => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        // mapping the the 'post_id's in every comment
        const mapIds = comments.map((comment: Comment) => comment.post_id)
        // sorting the mapped id's
        const sortArray: number[] = SortComments(mapIds)
        // filtering the posts based on the sorted array
        filterPosts(sortArray)
        handleLoading()

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