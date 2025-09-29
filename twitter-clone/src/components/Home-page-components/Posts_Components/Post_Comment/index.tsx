//TODO fix the modal adding new space inside the username area. Rather than staying on top.
import { useState } from 'react'
import { Comment, Follow, Post, User } from '../../../../App'

import PostModal from '../../../Post_Modal'

import { CommentContentArea, CommentUserArea } from "./styles"
import { ModalOverlay } from '../../../../styles'

type Props = {
    comment: Comment,
    set_posts?: any,
    posts?: Post[],
    post: Post,
    user: User,
    followingList: Follow[]
}

const CommentComponent = ({ comment, set_posts, posts, post, user, followingList }: Props) => {
    const [modal, setModal] = useState<boolean>(false)

    const removeOverlay = () => {
        if (modal) {
            setModal(false)
        }
    }

    return (
        <>
            <ModalOverlay onClick={e => removeOverlay()} className={(modal) ? "overlay" : ""}/>
            <div>
                <CommentUserArea>
                    <h4 onClick={e => setModal(true)}>{comment.author}</h4>
                    <PostModal
                        state={modal}
                        post_type="normal"
                        set_posts={set_posts}
                        posts={posts}
                        logged_user_id={user.id}
                        followingList={followingList}
                        data={{
                            user_id: comment.author_id,
                            username: comment.author
                        }}
                    />
                </CommentUserArea>
                <CommentContentArea>
                    <p>{comment.content}</p>
                </CommentContentArea>
            </div>
        </>
    )
}

export default CommentComponent