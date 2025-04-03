import { InputContainer } from "./styles"

const FormInputContainer = () => {
    return (
        <InputContainer>
            <div>
                <label htmlFor="name">Nome do Usuário:</label>
                <input id="name" type="text" required />
            </div>
            <div>
                <label htmlFor="password">Senha do Usuário:</label>
                <input id="password" type="password" required />
            </div>
        </InputContainer>
    )
}

export default FormInputContainer