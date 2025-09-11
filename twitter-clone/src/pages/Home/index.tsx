//TODO fix the posts not appearing when going back from post creation
//TODO fix the follow requests not returning the data

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { apiComments, apiPosts, Comment, Follow, Post, User } from "../../App"

import SideBar from "../../components/Home-page-components/SideBar_Components/SideBar"
import PostSection from "../../components/Home-page-components/Posts_Components/PostSection"
import SpecialPostsSection from "../../components/Home-page-components/Special_Posts/SpecialPostsSection"

import { HomeContainer } from "../../styles"
import CreationSection from "../../components/Home-page-components/Creation_Components/Creation_Section"
import { fetchUserFollowedData, fetchUserFollowingData, sleep } from "../../utils"

const Home = () => {
    const [Create, setCreate] = useState<boolean>(false)

    const [PostList, setPostList] = useState<Post[]>([])
    const [CommentList, setCommentList] = useState<Comment[]>([])
    const [FollowingList, setFollowingList] = useState<Follow[]>([])
    const [FollowedList, setFollowedList] = useState<Follow[]>([])

    const location = useLocation()

    const user: User = location.state.user
    // const followingList: Follow[] = location.state.followingList
    // const followedList: Follow[] = location.state.followedList

    const ChangeCreateStatus = (boolean: boolean) => {
        setCreate(boolean)
    }

    const FetchLists = async (user: User) => {
        // GET request for the Posts section of the api
        fetch(apiPosts.Get)
            .then((response) => response.json())
            .then((response) => setPostList(response))

        // GET request for the Comments section of the api
        fetch(apiComments.Get)
            .then((response) => response.json())
            .then((response) => setCommentList(response))

        const followingData = await fetchUserFollowingData(user)
        setFollowingList(followingData)

        const followedData = await fetchUserFollowedData(user)
        setFollowedList(followedData)
    }

    useEffect(() => {
        FetchLists(user)
        sleep(2)
    }, [user])

    return (
        <HomeContainer>
            <SideBar 
                user={user}
                followingList={FollowingList} 
                followedList={FollowedList} 
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
                        followingList={FollowingList} 
                        comments={CommentList}
                    />
                </>
                :
                <>
                    <CreationSection user={user} followingList={FollowingList} />
                </>
            }
            <SpecialPostsSection
                posts={PostList}
                comments={CommentList}
                followingList={FollowingList}
                userId={user.id}
            />
        </HomeContainer>
    )
}

export default Home