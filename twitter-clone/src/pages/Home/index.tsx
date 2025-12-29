import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { apiComments, apiPosts, Comment, Follow, Post, User } from "../../App"

import SideBar from "../../components/Home-page-components/SideBar_Components/SideBar"
import PostSection from "../../components/Home-page-components/Posts_Components/PostSection"
import SpecialPostsSection from "../../components/Home-page-components/Special_Posts/SpecialPostsSection"
import FollowUserModal from "../../components/Home-page-components/Search_User_Modal"
import CreationSection from "../../components/Home-page-components/Creation_Section"

import { HomeContainer, ModalOverlay } from "../../styles"
import EditPasswordModal from "../../components/Home-page-components/SideBar_Components/Edit_Password_Modal"

const Home = () => {
    const [Create, setCreate] = useState<boolean>(false)
    const [Search, setSearch] = useState<boolean>(false)
    const [Edit, setEdit] = useState<boolean>(false)

    const [PostList, setPostList] = useState<Post[]>([])
    const [CommentList, setCommentList] = useState<Comment[]>([])

    const location = useLocation()

    const user: User = location.state.user
    const followingList: Follow[] = location.state.followingList
    const followedList: Follow[] = location.state.followedList

    const ChangeCreateStatus = (boolean: boolean) => {
        setCreate(boolean)
    }

    const ChangeSearchStatus = (boolean: boolean) => {
        setSearch(boolean)
    }

    const ChangeEditStatus = (boolean: boolean) => {
        setEdit(boolean)
    }

    const FetchLists = async (user: User) => {
        // GET request for the Posts section of the api
        fetch(apiPosts.Get)
            .then((response) => response.json())
            .then((response) => setPostList(response))

        // GET request for the Comments section of the api
        fetch(apiComments.Get)
            .then((response) => response.json())
            .then((response) => setCommentList(response))
    }

    // function that removes the overlay
    const removeOverlay = () => {
        if (Search) {
            setSearch(false)
        } else if (Edit) {
            setEdit(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            FetchLists(user)
        // Timeout milliseconds
        }, 1000)
    }, [followedList, followingList, user])

    return (
        <>
            <ModalOverlay onClick={e => removeOverlay()} className={(Search || Edit) ? "overlay" : ""} />
            <HomeContainer>
                <SideBar 
                    user={user}
                    followingList={followingList}
                    followedList={followedList}
                    Create={Create}
                    changeCreate={ChangeCreateStatus}
                    Search={Search}
                    changeSearch={ChangeSearchStatus} 
                    Edit={Edit} 
                    changeEdit={ChangeEditStatus}
                />
                {
                    (!Create) ?
                        <>
                            <PostSection 
                                Create={Create}
                                user={user} 
                                posts={PostList} 
                                followingList={followingList} 
                                comments={CommentList}
                            />
                        </>
                    :
                        <>
                            <CreationSection 
                                changeCreate={ChangeCreateStatus} 
                                user={user} 
                                followingList={followingList}
                            />
                        </>
                }
                {
                    (Search) ?
                        <>
                            <FollowUserModal Search={Search} user={user} changeSearch={ChangeSearchStatus} />
                        </>
                    :
                    null
                }
                {
                    (Edit) ?
                        <>
                            <EditPasswordModal 
                                Edit={Edit} 
                                changeEdit={ChangeEditStatus} 
                                user={user} 
                            />
                        </>
                    :
                    null
                }
                <SpecialPostsSection
                    posts={PostList}
                    comments={CommentList}
                    followingList={followingList}
                    userId={user.id}
                />
            </HomeContainer>
        </>
    )
}

export default Home