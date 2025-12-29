import { useState } from "react"

import { apiFollows, Follow, User } from "../../../App"

import { Modal } from "./styles"
import { createFollow, deleteFollow, fetchUserIdWithUsername, filterFollow, sleep } from "../../../utils"

type Props = {
    Search: boolean
    user: User
    changeSearch: any
}

const SearchUserModal = ({Search, user, changeSearch}: Props) => {
    // Main states
    const [searchUsername, setSearchUsername] = useState<string>("")
    const [isLoggedUser, setIsLoggedUser] = useState<boolean>(false)
    const [isFollowing, setIsFollowing] = useState<boolean>(false)
    const [targetFollow, setTargetFollow] = useState<Follow>()
    const [followingId, setFollowingId] = useState<number>()
    const [success, setSuccess] = useState<boolean>(false)

    const CloseSearch = () => {
        changeSearch(false)
        setSuccess(false)
        setIsFollowing(false)
        setIsLoggedUser(false)
        setSearchUsername("")
    }

    const CheckFollow = async (user: User, target_id: number) => {
        const response = await fetch(apiFollows.Get)
            .then((response) => response.json())
            .then((response: Follow[]) => {return response})

        const filteredArray = filterFollow(response, user.id, target_id)

        if (filteredArray) {
            setTargetFollow(filteredArray)
            return true
        } else {
            return false
        }
    }

    const handleSubmit = async () => {
        setSuccess(false)
        setIsFollowing(false)
        setIsLoggedUser(false)

        const id: number | undefined = await fetchUserIdWithUsername(searchUsername)

        if (id === undefined) {
            console.log("Id não existe", id)
        } else {

            setFollowingId(id)

            if (id === user.id) {
                console.log("Você!")
                setIsLoggedUser(true)
            } else {
                const is_user_following_id: boolean = await CheckFollow(user, id)

                if (is_user_following_id === true) {
                    console.log("You are following this user")
                    setIsFollowing(true)
                } else {
                    console.log("You are NOT following this user")
                    setIsFollowing(false)
                }

                setSuccess(true)
            }
        }
    }

    const handleDeleteButton = (target_id: number | undefined) => {
        try {
            if (target_id !== undefined) {
                if (target_id > 0) {
                    deleteFollow(target_id)
                } else {
                    console.log("Erro, este 'id' não existe.")
                }
            }
        } catch {
            console.log("Não foi possível continuar com esta operação.")
        }
    }

    const handleCreateButton = (user_id: number, following_id: number | undefined) => {
        try {
            if (following_id !== undefined) {
                createFollow(user_id, following_id)

                sleep(2)

                window.location.reload()
            } else {
                console.log("Este 'id' não existe")
            }
        } catch {
            console.log("Ocorreu algum erro inesperado.")
        }
    }

    return (
        <>
            <Modal className={(Search) ? "unhidden" : ""}>
                <h2>Procure por um usuário:</h2>
                <input
                    min={2}
                    type="text"
                    required
                    value={searchUsername}
                    onChange={e => setSearchUsername(e.target.value)}
                />
                <div>
                    <button 
                        className="submit"
                        onClick={e => handleSubmit()}
                        type="submit"
                    >
                            Pesquisar
                        </button>
                    <button 
                        className="exit"
                        type="button"
                        onClick={e => CloseSearch()}
                    >
                        Cancelar
                    </button>
                </div>
                {/*TODO
                    create a div for the follow/unfollow of the target id
                */}
                {
                    (isLoggedUser) ?
                        <div className="loggedUser">
                            <h4>Você</h4>
                        </div>
                    :
                        null
                }

                {
                    (success) ?
                        <div className={(success) ? "followSection" : ""}>

                            {
                                (isFollowing) ?
                                    <>
                                        <h4>Seguindo</h4>
                                        <button onClick={e => handleDeleteButton(targetFollow?.id)}>Parar de seguir</button>
                                    </>
                                :
                                    <>
                                        <h4 className="notFollowed">Não está seguindo</h4>
                                        <button className="notFollowed" onClick={e => handleCreateButton(user.id, followingId)}>Seguir</button>
                                    </>
                            }
                        </div>
                    :
                        null
                }
            </Modal>
        </>
    )
}

export default SearchUserModal