import { useState } from "react";

import StateLift from './StateLift';

function StateLiftFather(params) {

    const [nome, setNome] = useState("")

    return (
        <div className="App">
            <h1>State lift</h1>
            <StateLift setNome={setNome} ></StateLift>
            {nome}
            {/* Com essa passagem, conseguimos enviar o dado para uma outra component e fazer  o que quiser com ela  */}
        </div>
    )

}
export default StateLiftFather