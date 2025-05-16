import { useEffect, useState } from "react"

import { apiPosts, apiUsers, Post, User } from "../../App"

import SideBar from "../../components/Home-page-components/SideBar_Components/SideBar"
import PostSection from "../../components/Home-page-components/Posts_Components/PostSection"
import SpecialPostsSection from "../../components/Home-page-components/Posts_Components/SpecialPostsSection"

import { HomeContainer } from "../../styles"

const Home = () => {
    const [homeUser, setHomeUser] = useState<User>(Object)
    const [homePost, setHomePost] = useState<Post[]>([])

    useEffect(() => {
        // GET request for the Users section of the api
        fetch(apiUsers)
            .then((response) => response.json())
            .then((response) => setHomeUser(response))

        // GET request for the Posts section of the api
        fetch(apiPosts)
            .then((response) => response.json())
            .then((response) => setHomePost(response))
    })

    return (
        <HomeContainer>
            <SideBar user={homeUser} />
            <PostSection post={homePost}/>
            <SpecialPostsSection />
        </HomeContainer>
    )
}

export default Home