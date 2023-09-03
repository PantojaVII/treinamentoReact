import { useState } from "react";

function Form() {
    //atribuindo um valor padrão é só colocar o useState('valoraquidentro')
    const [name, setname] = useState('Pantoja')
    const [password, setpassword] = useState('123')

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(name)

    }


    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome de usuário</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Digite seu nome"
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha do usuário</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Digite sua senha" />
                </div>
                <div>
                    <input
                        type="submit"
                        value='cadastrar' />
                </div>
            </form>
        </div>
    )

}
export default Form