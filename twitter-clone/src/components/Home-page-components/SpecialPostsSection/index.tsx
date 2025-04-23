import SpecialPost from "../SpecialPost"
import { SpecialPostsArea, SpecialPostsContainer } from "./styles"

const SpecialPostsSection = () => {
    return (
        <SpecialPostsContainer>
            <SpecialPostsArea>
                <h3>
                    Conversas mais comentadas hoje
                </h3>
                <SpecialPost />
                <SpecialPost />
            </SpecialPostsArea>
            <SpecialPostsArea>
                <h3>
                    Postagens de seus amigos
                </h3>
                <SpecialPost />
                <SpecialPost />
            </SpecialPostsArea>
        </SpecialPostsContainer>
    )
}

export default SpecialPostsSection