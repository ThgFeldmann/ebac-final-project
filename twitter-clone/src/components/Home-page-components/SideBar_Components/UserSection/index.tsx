//TODO fix the overlay not working on the special posts

import { useEffect, useState } from "react"

import { Modal, UserSection } from "./styles"
import { Overlay } from "../../../../styles"
import { apiUsers, User } from "../../../../App"

type Props = {
    username: string,
    id: number
}

const UserSectionComponent = ({ username, id }: Props) => {
    return (
        <UserSection>
            <h3>{username}</h3>
            <p>— {id} —</p>
        </UserSection>
    )
}

export default UserSectionComponent