function Event({variavel}) {

    function meuEvento() {
       alert(`Fui ativado ${variavel}`)
    }

    return (
        <div>
            <p>clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )

}

export default Event