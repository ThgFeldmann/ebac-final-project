//TODO fix the posts not appearing when going back from post creation

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { apiComments, apiPosts, Comment, Follow, Post, User } from "../../App"

import SideBar from "../../components/Home-page-components/SideBar_Components/SideBar"
import PostSection from "../../components/Home-page-components/Posts_Components/PostSection"
import SpecialPostsSection from "../../components/Home-page-components/Special_Posts/SpecialPostsSection"

import { HomeContainer } from "../../styles"
import CreationSection from "../../components/Home-page-components/Creation_Components/Creation_Section"

const Home = () => {
    const [Create, setCreate] = useState<boolean>(false)

    const [PostList, setPostList] = useState<Post[]>([])
    const [CommentList, setCommentList] = useState<Comment[]>([])
    
    const location = useLocation()

    const user: User = location.state.user
    const followingList: Follow[] = location.state.followingList
    const followedList: Follow[] = location.state.followedList

    const ChangeCreateStatus = (boolean: boolean) => {
        setCreate(boolean)
    }

    useEffect(() => {
        // GET request for the Posts section of the api
        fetch(apiPosts)
            .then((response) => response.json())
            .then((response) => setPostList(response))

        // GET request for the Comments section of the api
        fetch(apiComments)
            .then((response) => response.json())
            .then((response) => setCommentList(response))
    }, [user])

    return (
        <HomeContainer>
            <SideBar 
                user={user}
                followingList={followingList} 
                followedList={followedList} 
                Create={Create} 
                changeCreate={ChangeCreateStatus} 
            />
            {
                (!Create) ?
                <>
                    <PostSection 
                        Create={Create}
                        user={user} 
                        posts={PostList} 
                        followingList={followingList} 
                        comments={CommentList}
                    />
                </>
                :
                <>
                    <CreationSection user={user} />
                </>
            }
            <SpecialPostsSection 
                posts={PostList} 
                comments={CommentList} 
            />
        </HomeContainer>
    )
}

export default Home