import { useState } from "react"

import { Follow, Post } from "../../../../App"

import PostModal from "../../../Post_Modal"

import { ModalOverlay } from "../../../../styles"
import { SpecialPostContainer, SpecialPostContentArea, SpecialPostUserNameArea } from "./styles"


type Props = {
    post: Post
    followingList: Follow[]
    userId: number
}

const SpecialPost = ({ post, followingList, userId }: Props) => {
    const [modal, setModal] = useState<boolean>(false)

    const toggleModal = () => {
        if (!modal) {
            setModal(true)
        } else {
            setModal(false)
        }
    }

    return (
        <>
            <ModalOverlay onClick={e => toggleModal()} className={(!modal) ? "" : "overlay"} />
            <SpecialPostContainer>
                <SpecialPostUserNameArea>
                    <h4 onClick={e => toggleModal()}>
                        {post.author}
                    </h4>
                    {
                        (modal === true) ?
                            <PostModal
                                state={modal} 
                                post_type="special"
                                logged_user_id={userId}
                                followingList={followingList}
                                data={{
                                    user_id: post.author_id,
                                    username: post.author
                                }}
                                post_author_id={post.author_id}
                            />
                        :
                            null
                    }
                </SpecialPostUserNameArea>
                <SpecialPostContentArea>
                    <p>{post.content}</p>
                </SpecialPostContentArea>
            </SpecialPostContainer>
        </>
    )
}

export default SpecialPost