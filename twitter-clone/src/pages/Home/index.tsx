import { HomeContainer } from "../../styles"
import SideBar from "../../components/Home-page-components/SideBar"
import PostSection from "../../components/Home-page-components/PostSection"
import SpecialPostsSection from "../../components/Home-page-components/SpecialPostsSection"

const Home = () => {
    return (
        <HomeContainer>
            <SideBar/>
            <PostSection/>
            <SpecialPostsSection/>
        </HomeContainer>
    )
}

export default Home