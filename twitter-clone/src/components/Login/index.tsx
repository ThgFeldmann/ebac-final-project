const LoginComponent = () => {
    return (
        <>
            <h1>Twitter clone</h1>
            <div>
                <div>
                    <div>
                        <label>Nome do Usuário:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Senha do Usuário:</label>
                        <input type="password" />
                    </div>
                </div>
                <div>
                    <button>Entrar</button>
                    <button>Cadastre uma Conta</button>
                </div>
            </div>
        </>
    )
}

export default LoginComponent