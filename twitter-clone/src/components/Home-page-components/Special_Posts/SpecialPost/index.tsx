import { useState } from "react"

import { Post } from "../../../../App"
import Dropdown from "../SpecialPost_Dropdown"

import { DropdownOverlay } from "../../../../styles"
import { SpecialPostContainer, SpecialPostContentArea, SpecialPostUserNameArea } from "./styles"


type Props = {
    post: Post
}

const SpecialPost = ({ post }: Props) => {
    const [dropdown, setDropdown] = useState<boolean>(false)

    const toggleDropdown = () => {
        if (!dropdown) {
            setDropdown(true)
        } else {
            setDropdown(false)
        }
    }

    return (
        <>
            <DropdownOverlay onClick={e => toggleDropdown()} className={(!dropdown) ? "" : "overlay"} />
            <SpecialPostContainer>
                <SpecialPostUserNameArea>
                    <h4 onClick={e => toggleDropdown()}>
                        {post.author}
                    </h4>
                    <Dropdown 
                        state={dropdown} 
                        post={post}
                    />
                </SpecialPostUserNameArea>
                <SpecialPostContentArea>
                    <p>{post.content}</p>
                </SpecialPostContentArea>
            </SpecialPostContainer>
        </>
    )
}

export default SpecialPost