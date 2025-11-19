import { Overlay } from "../../styles"

const Dropdown = () => {
    return (
        <>
            <Overlay />
            <div>
                <h3>author name</h3>
                <h4>Você /não está seguindo este usuário</h4>
                <div>
                    <button>Seguir | Deixar de seguir</button>
                </div>
            </div>
        </>
    )
}

export default Dropdown