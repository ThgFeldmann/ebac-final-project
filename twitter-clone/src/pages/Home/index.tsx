import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { apiPosts, Follow, Post, User } from "../../App"

import SideBar from "../../components/Home-page-components/SideBar_Components/SideBar"
import PostSection from "../../components/Home-page-components/Posts_Components/PostSection"
import SpecialPostsSection from "../../components/Home-page-components/Posts_Components/SpecialPostsSection"

import { HomeContainer } from "../../styles"

const Home = () => {
    const [PostList, setPostList] = useState<Post[]>([])
    
    const location = useLocation()

    const user: User = location.state.user
    const followingList: Follow[] = location.state.followingList
    const followedList: Follow[] = location.state.followedList

    useEffect(() => {
        // GET request for the Posts section of the api
        fetch(apiPosts)
            .then((response) => response.json())
            .then((response) => setPostList(response))
    }, [user])

    return (
        <HomeContainer>
            <SideBar user={user} followingList={followingList} followedList={followedList} />
            <PostSection user={user} posts={PostList} followingList={followingList}/>
            <SpecialPostsSection />
        </HomeContainer>
    )
}

export default Home