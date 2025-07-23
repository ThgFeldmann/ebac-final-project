//TODO continue creating the button for the image
//* accept image as file

import { CreationAuthorArea, CreationContentArea, CreationItemContainer } from "./styles"

export const CreationItem = () => {
    return (
        <CreationItemContainer>
            <CreationAuthorArea>
                <h4>Author name</h4>
            </CreationAuthorArea>
            <CreationContentArea>
                <label htmlFor="image">
                    Caso queira postar uma foto, clique no botão abaixo para escolher uma.
                </label>
                <input id="image" name="image" type="file" accept="image/png, image/jpeg" />
                <textarea id="" name="" autoComplete="off" />
            </CreationContentArea>
        </CreationItemContainer>
    )
}

export default CreationItem