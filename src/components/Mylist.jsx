function MyList({ myList }) {
 
    return (
        <>
            <h1>Minha lista de itens</h1>
            {
                myList.length > 0 ? (
                    myList.map((item,index) => <p key={index}> {item} </p> )
                ) : (
                    <p>Sem itens a lista</p>
                )
            }
        </>
    )
}
export default MyList