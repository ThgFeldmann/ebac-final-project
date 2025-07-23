import { useEffect, useState } from "react"

import SpecialPost from "../SpecialPost"

import { SpecialPostsContainer, SpecialPostsArea } from "./styles"

import { apiPosts, Comment, Post, User } from "../../../../App"
import { sleep } from "../../../../utils"

type Props = {
    user: User
    posts: Post[]
    comments: Comment[]
}

const SpecialPostsSection = ({ posts, comments }: Props) => {
    // toggle states
    const [PopularPostsList, setPopularPostsList] = useState<boolean>(true)
    const [FriendsPostsList, setFriendsPostsList] = useState<boolean>(false)
    // posts that will be rendered
    const [validPosts, setValidPosts] = useState<Post[]>([])

    // function that toggles the current list that is being rendered
    const TogglePostsList = () => {
        if (PopularPostsList === true) {
            setPopularPostsList(false)
            setFriendsPostsList(true)
        } 
        else if (FriendsPostsList === true) {
            setPopularPostsList(true)
            setFriendsPostsList(false)
        }
    }

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
    }, [posts, PopularPostsList])

    return (
        <SpecialPostsContainer>
            <button onClick={event => TogglePostsList()}>
                { //* TOGGLE BUTTON FUNCTION AND MESSAGE
                    (PopularPostsList === true) ?
                    'Postagens mais comentadas'
                    :
                    (FriendsPostsList === true) ?
                    'Postagens de seus amigos'
                    :
                    'Postagens não encontradas'
                }
            </button>
            {
                (PopularPostsList === true) ? //* POPULAR POSTS LIST
                <SpecialPostsArea>
                    {
                        validPosts.map((post: Post) => {
                            return (
                                <SpecialPost post={post} />
                            )
                        })
                    }
                </SpecialPostsArea>
                : //? maybe remove this section
                (FriendsPostsList === true) ? //* FOLLOWING POSTS LIST
                <SpecialPostsArea>
                    {
                        posts.map((post: Post) => {
                            return (
                                <SpecialPost post={post} />
                            )
                        })
                    }
                </SpecialPostsArea>
                :
                'Não foi possível acessar esta lista de postagens!'
            }
        </SpecialPostsContainer>
    )
}

export default SpecialPostsSection