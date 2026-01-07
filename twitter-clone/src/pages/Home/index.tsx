import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { apiComments, apiLikes, apiPosts, Comment, Follow, Like, Post, User } from "../../App"

import SideBar from "../../components/Home-page-components/SideBar_Components/SideBar"
import PostSection from "../../components/Home-page-components/Posts_Components/PostSection"
import SpecialPostsSection from "../../components/Home-page-components/Special_Posts/SpecialPostsSection"
import FollowUserModal from "../../components/Home-page-components/Search_User_Modal"
import CreationSection from "../../components/Home-page-components/Creation_Section"

import { HomeContainer, ModalOverlay } from "../../styles"
import EditPasswordModal from "../../components/Home-page-components/Edit_Modals/Edit_Password_Modal"
import AccountSection from "../../components/Home-page-components/Account_Section"
import EditUsernameModal from "../../components/Home-page-components/Edit_Modals/Edit_Username_Modal"
import EditBioModal from "../../components/Home-page-components/Edit_Modals/Edit_Bio_Modal"
import EditImageModal from "../../components/Home-page-components/Edit_Modals/Edit_Image_Modal"

const Home = () => {
    const [Account, setAccount] = useState<boolean>(false)
    const [Create, setCreate] = useState<boolean>(false)
    const [Search, setSearch] = useState<boolean>(false)

    const [EditUsername, setEditUsername] = useState<boolean>(false)
    const [EditBio, setEditBio] = useState<boolean>(false)
    const [EditPassword, setEditPassword] = useState<boolean>(false)
    const [EditImage, setEditImage] = useState<boolean>(false)

    const [PostList, setPostList] = useState<Post[]>([])
    const [CommentList, setCommentList] = useState<Comment[]>([])
    const [LikeList, setLikeList] = useState<Like[]>([])
    const [UserLikeList, setUserLikeList] = useState<Like[]>([])

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

    const ChangeAccountStatus = (boolean: boolean) => {
        setAccount(boolean)
    }

    const ChangeEditUsernameStatus = (boolean: boolean) => {
        setEditUsername(boolean)
    }

    const ChangeEditBioStatus = (boolean: boolean) => {
        setEditBio(boolean)
    }

    const ChangeEditPasswordStatus = (boolean: boolean) => {
        setEditPassword(boolean)
    }

    const ChangeEditImageStatus = (boolean: boolean) => {
        setEditImage(boolean)
    }
    
    const FetchLists = async (user: User) => {
        // GET request for the "Posts" section of the api
        fetch(apiPosts.Get)
            .then((response) => response.json())
            .then((response) => setPostList(response))

        // GET request for the "Comments" section of the api
        fetch(apiComments.Get)
            .then((response) => response.json())
            .then((response) => setCommentList(response))

        // GET request for the "Likes" section of the api | 
        //  also filtering those related to the logged user
        fetch(apiLikes.Get)
            .then((response) => response.json())
            .then((response) => {
                const filteredLikes = response.filter((item: Like) => item.user_id === user.id)
                setUserLikeList(filteredLikes)
                setLikeList(response)
            })
    }

    // function that removes the overlay
    const removeOverlay = () => {
        setSearch(false)
        setEditPassword(false)
        setEditUsername(false)
        setEditBio(false)
    }

    const handleOverlayDisplay = () => {
        if (Search || EditPassword || EditUsername || EditBio || EditImage) {
            return "overlay"
        } else {
            return ""
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
            <ModalOverlay onClick={e => removeOverlay()} className={handleOverlayDisplay()} />
            <HomeContainer>
                <SideBar 
                    user={user}
                    followingList={followingList}
                    followedList={followedList}
                    Create={Create}
                    changeCreate={ChangeCreateStatus}
                    Search={Search}
                    changeSearch={ChangeSearchStatus}
                    Account={Account}
                    changeAccount={ChangeAccountStatus}
                />
                {
                    (!Create && !Account) ?
                        <>
                            <PostSection 
                                Create={Create}
                                user={user} 
                                posts={PostList} 
                                followingList={followingList} 
                                comments={CommentList}
                                likeList={LikeList}
                                userLikeList={UserLikeList}
                            />
                        </>
                    : (Create && !Account) ?
                        <>
                            <CreationSection 
                                changeCreate={ChangeCreateStatus} 
                                user={user} 
                                followingList={followingList}
                            />
                        </>
                    : (!Create && Account) ?
                        <>
                            <AccountSection 
                                user={user}
                                EditUsername={EditUsername}
                                changeEditUsername={ChangeEditUsernameStatus}
                                EditPassword={EditPassword} 
                                changeEditPassword={ChangeEditPasswordStatus}
                                EditBio={EditBio}
                                changeEditBio={ChangeEditBioStatus}
                                EditImage={EditImage}
                                changeEditImage={ChangeEditImageStatus}
                            />
                        </>
                    :
                        null
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
                    (EditPassword) ?
                        <>
                            <EditPasswordModal 
                                EditPassword={EditPassword} 
                                changeEditPassword={ChangeEditPasswordStatus} 
                                user={user} 
                            />
                        </>
                    :
                    null
                }
                {
                    (EditUsername) ?
                        <>
                            <EditUsernameModal 
                                EditUsername={EditUsername} 
                                changeEditUsername={ChangeEditUsernameStatus} 
                                user={user}
                            />
                        </>
                    :
                        null
                }
                {
                    (EditBio) ?
                        <>
                            <EditBioModal 
                                EditBio={EditBio} 
                                changeEditBio={ChangeEditBioStatus} 
                                user={user}
                            />
                        </>
                    :
                        null
                }
                {
                    (EditImage) ?
                        <>
                            <EditImageModal
                                EditImage={EditImage}
                                changeEditImage={ChangeEditImageStatus}
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