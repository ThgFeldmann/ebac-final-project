//TODO Render posts from the logged user and his follows
//TODO fetch a list of the logged user posts
//TODO fetch a list of the following users posts

import { useEffect, useState } from "react"

import { Follow, Post, User } from "../../../../App"

import PostComponent from "../Post_Item"

import { PostSectionContainer } from "./styles"

type Props = {
    user: User
    posts: Post[]
    followingList: Follow[]
}

const PostSection = ({ posts, user, followingList }: Props) => {
    //* this state will be mapped on the component
    // posts that will be rendered | from logged user and the following users
    const [validPosts, setValidPosts] = useState<Post[]>([])

    useEffect(() => {

        //* For later
        // Filtering the posts list for the logged user
        const result: Post[] = posts.filter((item: Post) => item.authorId === user.id)
        setValidPosts(validPosts => (...validPosts, result))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <PostSectionContainer>
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