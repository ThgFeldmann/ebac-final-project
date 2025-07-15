//TODO Render posts from the logged user and his follows
//* DONE | fetch a list of the logged user posts
//* DONE | fetch a list of the following posts

//TODO fix the valid posts having incorrect structure due to following posts, the structure: [{}, {}, [{}, {}], [{}, {}]]

import { useEffect, useState } from "react"

import { Follow, Post, User } from "../../../../App"

import PostComponent from "../Post_Item"

import { PostSectionContainer } from "./styles"
import { sleep } from "../../../../utils"

type Props = {
    user: User
    posts: Post[]
    followingList: Follow[]
}

const PostSection = ({ posts, user, followingList }: Props) => {
    const [loading, setLoading] = useState<boolean>(true)
    // logged user posts
    const [userPosts, setUserPosts] = useState<Post[]>([])
    const [followingPosts, setFollowingPosts] = useState<Post[]>([])
    const [validPosts, setValidPosts] = useState<Post[]>([])

    // Filtering the posts list for the logged user
    const filterLoggedUserPosts = (postArray: Post[]) => {
        const result: Post[] = postArray.filter((post: Post) => post.authorId === user.id)
        setUserPosts(result)
    }

    const mapPromiseResponses = (responses: any[]) => {
        const result = responses.map((array: Post[]) => {
            const postMapResult = array.map((item: Post) => {
                return item
            })
            console.log("result: ", postMapResult)
            return postMapResult
        })
    }

    //TODO fix this \/
    //? returns data of the following structure: [[{}, {}], [{}, {}], [{}, {}]]
    // Fetches the following posts from the api
    const fetchFollowingPosts = async (followArray: Follow[], postArray: Post[]) => {
        // maps the followingIds received from props
        const idList: number[] = followArray.map((item: Follow) => item.followingId)

        const result = await Promise.all(
            idList.map((id: number) => {
                const authorIdUrl = `https://echo-fake-api.vercel.app/posts?authorId=${id}`
                const res = fetch(authorIdUrl)
                    .then((response) => response.json())
                    .then((response) => {return response})
                return res
            })
        ).then((responses: any[]) => {
                return responses
            })
        
        mapPromiseResponses(result)
    }

    // Concats the 'userPosts' and the 'followingPosts' states into the 'validPosts' state
    const concatArrays = () => {
        // concatenating both of the posts array into a single one
        let concatArray = userPosts.concat(followingPosts)
        // storing the previous array into a state
        setValidPosts(concatArray)
    }

    useEffect(() => {

        if (validPosts.length > 0) { //* IF THE 'validPosts' ISN'T EMPTY
            setLoading(false)
        } else { //* IF THE 'validPosts' IS EMPTY
            
            // filtering the following posts and storing the result into a state
            fetchFollowingPosts(followingList, posts)

            // filtering the logged user posts and storing the result into a state
            filterLoggedUserPosts(posts)

            concatArrays()
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, posts])

    // remove this later
    const log = () => {
        console.log("followingList: ", followingList)
        console.log("posts: ")
        console.log("posts from props: ", posts)
        console.log("posts from the logged user: ", userPosts)
        console.log("posts from the following users: ", followingPosts)
        console.log("valid posts: ", validPosts)
    }

    // const test = () => {
    //     const array_1 = [{id: "1", name: "Jorge"}, {id: "2", name: "Cleber"}]
    //     const array_2 = [[{id: "3", name: "Julia"}, {id: "4", name: "Judas"}], [{id: "5",}]]
    // }

    return (
        <PostSectionContainer>
            <div>
                <button onClick={e => log()}>log posts</button> {/* remove this later */}
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
                            <PostComponent post={post} />
                        </div>
                    ))
                }
            </div>
        </PostSectionContainer>
    )
}

export default PostSection