import Button from "./events/Button"

function Event({variavel}) {
    
    function Alerta(){
        console.log('teste do alerta 01')
    }
    
    function Alerta2(){
        console.log('teste do alerta 02')
    }
    


     return (
        <div>
            <p>clique para disparar um evento:</p>
            <Button Onclick={Alerta} Text='Botão 01'></Button>
            <Button Onclick={Alerta2} Text='Botão 02'></Button>

        </div>
    )

}

export default Event