
import CreationItem from "../Creation_Item"

import { Button, ButtonContainer, CreationSectionContainer, Headline } from "./styles"

export const CreationSection = () => {
    return (
        <CreationSectionContainer>
            <Headline>Crie sua postagem!</Headline>
            <CreationItem />
            <ButtonContainer>
                <Button>Concluir</Button>
                <Button>Reiniciar</Button>
            </ButtonContainer>
        </CreationSectionContainer>
    )
}

export default CreationSection