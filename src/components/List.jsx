import Item from "./Item"
function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <Item marca={'Ferrari'} AnoLancamento={1999}></Item>
            <Item marca={'Audi'} AnoLancamento={1999}></Item>
            <Item marca={'Toyota'}></Item>
            <Item></Item>
        </>
    )
}
export default List