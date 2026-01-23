import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import { apiComments, apiPosts, Comment, Follow, Post, User } from "../../App"

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
import { fetchUserFollowedData, fetchUserFollowingData } from "../../utils"

const Home = () => {
    const [Account, setAccount] = useState<boolean>(false)
    const [Create, setCreate] = useState<boolean>(false)
    const [Search, setSearch] = useState<boolean>(false)

    const [EditUsername, setEditUsername] = useState<boolean>(false)
    const [EditBio, setEditBio] = useState<boolean>(false)
    const [EditPassword, setEditPassword] = useState<boolean>(false)
    const [EditImage, setEditImage] = useState<boolean>(false)

    const [FollowingList, setFollowingList] = useState<Follow[]>([])
    const [FollowedList, setFollowedList] = useState<Follow[]>([])
    const [PostList, setPostList] = useState<Post[]>([])
    const [CommentList, setCommentList] = useState<Comment[]>([])

    const location = useLocation()

    const user: User = location.state.user

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
    
    const fetchComments = async () => {
        try {
            const res = await fetch(apiComments.Get)
            if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
            }

            const data: Comment[] = await res.json()
            console.log("response data: ", data)
            setCommentList(data)
        } catch (err) {
            console.error("Failed to fetch comments:", err)
        }
    }

    const FetchLists = async (user: User) => {

        // fetch follow datas
        const followingData = await fetchUserFollowingData(user)
        const followedData = await fetchUserFollowedData(user)
        
        setFollowingList(followingData)
        setFollowedList(followedData)

        // GET request for the "Posts" section of the api
        fetch(apiPosts.Get)
            .then((response) => response.json())
            .then((response) => setPostList(response))

        // // GET request for the "Comments" section of the api
        // fetch(apiComments.Get)
        //     .then((response) => response.json())
        //     .then((response) => setCommentList(response))

        fetchComments()
    }

    // function that removes the overlay
    const removeOverlay = () => {
        setSearch(false)
        setEditPassword(false)
        setEditUsername(false)
        setEditBio(false)
        setEditImage(false)
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
    }, [user])

    return (
        <>
            <ModalOverlay onClick={e => removeOverlay()} className={handleOverlayDisplay()} />
            <HomeContainer>
                <SideBar 
                    user={user}
                    followingList={FollowingList}
                    followedList={FollowedList}
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
                                followingList={FollowingList} 
                                comments={CommentList}
                            />
                        </>
                    : (Create && !Account) ?
                        <>
                            <CreationSection 
                                changeCreate={ChangeCreateStatus} 
                                user={user} 
                                followingList={FollowingList}
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
                    followingList={FollowingList}
                    userId={user.id}
                />
            </HomeContainer>
        </>
    )
}

export default Home