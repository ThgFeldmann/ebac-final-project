import { useEffect, useState } from "react"

import SpecialPost from "../SpecialPost"

import { SpecialPostsContainer, SpecialPostsArea } from "./styles"

import { apiPosts, Comment, Post } from "../../../../App"
import { sleep } from "../../../../utils"

type Props = {
    posts: Post[]
    comments: Comment[]
}

const SpecialPostsSection = ({ posts, comments }: Props) => {
    // posts that will be rendered
    const [validPosts, setValidPosts] = useState<Post[]>([])

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
        // the nearer to the start of the array, it will be
        const formatArray = sortedArray.filter((item, index, self) => {
            return self.indexOf(item) === index
        })

        return formatArray
    }

    // function that fetches the posts based on the received array of ids
    const filterPosts = async (array: number[]) => {
        // selects the top five comments and removes the rest
        const splicedArray = array.splice(0, 5)
        
        // executing a fetch promise with every id in 'splicedArray'
        const result = await Promise.all(
            splicedArray.map((id: number) => 
                fetch(apiPosts + '/' + id)
                    .then((response) => response.json())
            )
        ).then((responses: Post[]) => { // returning the collected posts in a 'Post[]' type
            return responses
        })

        // setting the result of the promise into the state
        setValidPosts(result)
    }

    useEffect(() => {
        const mapIds = comments.map((comment: Comment) => comment.postId)
        const sortArray: number[] = SortComments(mapIds)
        console.log("sort: ", sortArray)
        filterPosts(sortArray)
        sleep(2)
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
                (validPosts.length > 0) ? //* IF THERE ARE VALID POSTS
                <SpecialPostsArea>
                    {
                        validPosts.map((post: Post) => {
                            return (
                                <SpecialPost post={post} />
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