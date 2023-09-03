import { useState } from "react";

function Condition() {

    const [email, setemail] = useState("")
    const [userEmail, setUserEmail] = useState("")

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email) // setamos o userEmail.
    }
    function ClearEmail(e) {
        e.preventDefault()
        setUserEmail('') // setamos o userEmail.
    }

    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={
                        (e) => setemail(e.target.value)
                    }
                    placeholder="Digite seu Email"
                />
                <button onClick={enviarEmail} >Enviar email</button>
            </form>
            
            {/* Abaixo temos como é feito um if  */}
            {userEmail && (
                <div>
                    <p>O email digitado é {userEmail}</p>
                    <button onClick={ClearEmail} >Limpar email</button>
                </div>
            )}
        </div>
    )
}
export default Condition