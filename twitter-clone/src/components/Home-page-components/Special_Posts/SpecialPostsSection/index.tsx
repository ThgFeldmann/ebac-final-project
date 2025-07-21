//TODO special posts rendering

//TODO render the posts based on how many comments they received
//* the more comments, the higher they will be

//* every 'comment' item has a 'postId', which tells from which post it is
//TODO sort the posts based on the 'postId' repetition array

import { useEffect, useState } from "react"

import SpecialPost from "../SpecialPost"

import { SpecialPostsContainer, SpecialPostsArea } from "./styles"

import { Comment, Post, User } from "../../../../App"

type Props = {
    user: User
    posts: Post[]
    comments: Comment[]
}

const SpecialPostsSection = ({ user, posts, comments }: Props) => {
    // toggle states
    const [PopularPostsList, setPopularPostsList] = useState<boolean>(true)
    const [FriendsPostsList, setFriendsPostsList] = useState<boolean>(false)
    
    const [repetitionArray, setRepetitionArray] = useState<number[]>([])
    
    // const [validPosts, setValidPosts] = useState<Post[]>([])

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

    //? also sorting in ascending order, not intended
    // function that sorts the 'postId's (from the comments) in repetition order
    const SortComments = () => {
        const mapValues = comments.map((comment: Comment) => comment.postId)
        const sortedValues = mapValues.sort((a, b) => a - b)
        setRepetitionArray(sortedValues)
    }

    useEffect(() => {
        SortComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts])

    const log = () => {
        console.log("posts from props: ", posts)
        console.log("repetition array: ", repetitionArray)
    }

    return (
        <SpecialPostsContainer>
            <button onClick={e => log()}>log posts</button>
            <button onClick={event => TogglePostsList()}>
                { //* TOGGLE BUTTON FUNCTION AND MESSAGE
                    (PopularPostsList === true) ?
                    'Postagens mais comentadas hoje'
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
                        posts.map((post: Post) => {
                            return (
                                <SpecialPost post={post} />
                            )
                        })
                    }
                </SpecialPostsArea>
                :
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