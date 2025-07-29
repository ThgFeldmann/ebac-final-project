import { useEffect, useState } from "react"

import { Comment, Follow, Post } from "../../../../App"

import CommentComponent from "../Post_Comment"

import { PostContainer, PostContentArea, PostUserNameArea } from "./styles"
import PostDropdown from "../Post_Dropdown"

type Props = {
    userId: number
    post: Post
    comments: Comment[]
    followingList: Follow[]
}

const PostComponent = ({ userId, post, comments, followingList }: Props) => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [commentList, setCommentList] = useState<Comment[]>([])

    const filterComments = (commentArray: Comment[]) => {
        const result = commentArray.filter((comment: Comment) => comment.postId === post.id)
        setCommentList(result)
    }

    const toggleDropdown = () => {
        if (!dropdown) {
            setDropdown(true)
        } else {
            setDropdown(false)
        }
    }

    useEffect(() => {
        filterComments(comments)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [post, comments])

    return (
        <>
            <PostContainer>
                <PostUserNameArea>
                    <h4 onClick={e => toggleDropdown()}>{post.author}</h4>
                    <PostDropdown
                        state={dropdown}
                        userId={userId}
                        postAuthorId={post.authorId}
                        postAuthor={post.author} 
                        followingList={followingList} 
                    />
                </PostUserNameArea>
                <PostContentArea>
                    {(post.image !== null) ?
                        <img src={post.image} alt={''} />
                    :
                        null
                    }
                    {/* <img src={(post.image !== null) ? post.image : ''} alt={(post.image !== null) ? "Imagem não encontrada" : ''} /> */}
                    <p>{post.content}</p>
                </PostContentArea>
                {(comments === null || undefined) ?
                    <div>
                        <h4>Este post ainda não tem comentários</h4>
                    </div>
                :
                    commentList.map((comment: Comment) => (
                        <div key={comment.commentId}>
                            <CommentComponent comment={comment} />
                        </div>
                    ))
                }
            </PostContainer>
        </>
    )
}

export default PostComponent