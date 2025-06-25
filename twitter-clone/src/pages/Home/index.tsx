import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import { apiPosts, Post, User } from "../../App"

import SideBar from "../../components/Home-page-components/SideBar_Components/SideBar"
import PostSection from "../../components/Home-page-components/Posts_Components/PostSection"
import SpecialPostsSection from "../../components/Home-page-components/Posts_Components/SpecialPostsSection"

import { HomeContainer } from "../../styles"

const Home = () => {
    const [homePost, setHomePost] = useState<Post[]>([])
    
    const location = useLocation()

    const receivedState: User = location.state

    useEffect(() => {
        // GET request for the Posts section of the api
        fetch(apiPosts)
            .then((response) => response.json())
            .then((response) => setHomePost(response))
    }, [])

    return (
        <HomeContainer>
            <SideBar />
            <PostSection user={receivedState} posts={homePost}/>
            <SpecialPostsSection />
        </HomeContainer>
    )
}

export default Home