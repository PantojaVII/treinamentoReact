/* Você cria um component como uma função e depois é necessário exporta-lo para utilizado futuramente. */

import Frase from "./Frase"

function HelloWord() {

    return (
        <div className="helloWord">
            <h1>Hello Word</h1>
            <Frase></Frase>
        </div>
    )

}

export default HelloWord