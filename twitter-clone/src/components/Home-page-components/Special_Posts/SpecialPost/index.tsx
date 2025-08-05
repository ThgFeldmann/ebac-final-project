import { useState } from "react"

import { Follow, Post } from "../../../../App"

import PostDropdown from "../../../Dropdown_Components/Post_Dropdown"

import { DropdownOverlay } from "../../../../styles"
import { SpecialPostContainer, SpecialPostContentArea, SpecialPostUserNameArea } from "./styles"


type Props = {
    post: Post
    followingList: Follow[]
    userId: number
}

const SpecialPost = ({ post, followingList, userId }: Props) => {
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
                    <PostDropdown 
                        state={dropdown} 
                        post_type="special"
                        userId={userId} 
                        postAuthorId={post.authorId} 
                        postAuthor={post.author} 
                        followingList={followingList}
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