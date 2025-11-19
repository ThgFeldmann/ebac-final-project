import { UserSection } from "./styles"

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