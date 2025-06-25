//TODO Render posts from the logged user and his follows

import { useEffect, useState } from "react"
import { apiFollows, Follow, Post, User } from "../../../../App"
import PostComponent from "../Post"
import { PostSectionContainer } from "./styles"

type Props = {
    user: User
    posts: Post[]
}

const PostSection = ({ posts, user }: Props) => {
    // posts that will be rendered based on conditions
    const [validPosts, setValidPosts] = useState<Post[]>([])
    // list of follow cases
    const [followingList, setFollowingList] = useState<Follow[]>([])

    //TODO setStates not working
    useEffect(() => {
        fetch(apiFollows)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)

                const result = response.filter(
                        (item: Follow) =>
                            item.userId === user.id
                    )

                console.log(result)
            })

        // // Filtering the posts list for the logged user
        // const result: Post[] = posts.filter((item: Post) => item.authorId === user.id)
        // setValidPosts(validPosts => validPosts.concat(result))

    }, [user])

    const test = () => {
        console.log("followingList: ")
        console.log(followingList)
        // console.log("Valid Posts: ")
        // console.log(validPosts)
    }

    //TODO Map the 'validPosts' array
    return (
        <PostSectionContainer>
            <button onClick={e => test()}>test</button>
            {posts.map((post: Post) => (
                <div key={post.id}>
                    <PostComponent post={post} />
                </div>
            ))}
        </PostSectionContainer>
    )
}

export default PostSection

//// {post.map((post) => (
////     <div key={post.id}>
////         <PostComponent post={post} />
////     </div>
//// ))}