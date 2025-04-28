import SpecialPost from "../SpecialPost"
import { SpecialPostsArea, SpecialPostsContainer, SpecialPostsScrollArea } from "./styles"

const SpecialPostsSection = () => {
    return (
        <SpecialPostsContainer>
            <SpecialPostsArea>
                <button>
                    Postagens mais comentadas hoje
                </button>
                <SpecialPostsScrollArea>
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                    <SpecialPost />
                </SpecialPostsScrollArea>
            </SpecialPostsArea>
        </SpecialPostsContainer>
    )
}

export default SpecialPostsSection