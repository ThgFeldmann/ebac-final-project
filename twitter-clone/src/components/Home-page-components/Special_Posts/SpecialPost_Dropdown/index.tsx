import { Post } from "../../../../App"

import { DropdownContainer } from "./styles"

type Props = {
    state: boolean
    post: Post
}

const Dropdown = ({ state, post }: Props) => {
    return (
        <>
            <DropdownContainer className={(!state) ? "" : "dropdown"}>
                <h3>{post.author}</h3>
                <h4>Você /não está seguindo este usuário</h4>
                <div>
                    <button>Seguir | Deixar de seguir</button>
                </div>
            </DropdownContainer>
        </>
    )
}

export default Dropdown