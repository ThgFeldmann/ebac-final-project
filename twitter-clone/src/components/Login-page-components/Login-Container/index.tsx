import { useState } from "react"

import { apiUsers } from "../../../App";

import { ButtonContainer, InputContainer, LinkButton, LoginContainer } from "./styles"
import { useNavigate } from "react-router-dom";

const LoginContainerComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(apiUsers, {
                method: 'POST',
                headers: {
                    'Content.Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json()

            if (response.ok) {
                // Handle successful login
                navigate('/Home')
                console.log('Login successful:', data)
            } else {
                // Handle login error
                setError(data.message || 'Login failed')
            }
        } catch (err) {
            setError('Erro de rede. Por favor tente denovo mais tarde')
        }
    }

    // put "onSubmit=(handleSubmit)" directly on "InputContainer"

    return (
        <LoginContainer>
            <InputContainer>
                <div>
                    <label htmlFor="name">Nome do Usuário:</label>
                    <input required id="name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha do Usuário:</label>
                    <input required id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <ButtonContainer>
                    <button type="submit"></button>
                    {/* Change Links to be buttons and use the 'useNavigate' feature from react-router */}
                    <LinkButton to='/Home' className='LoginButton' type='submit'>
                            Entrar
                    </LinkButton>
                    <LinkButton to='/SignUp' className='SignUpButton' type='button'>
                            Crie uma Conta
                    </LinkButton>
                </ButtonContainer>
            </InputContainer>
        </LoginContainer>
    )
}

export default LoginContainerComponent