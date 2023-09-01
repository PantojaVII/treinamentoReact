import Proptypes from 'prop-types'

function Item({ marca, AnoLancamento }) {
    return (
        <>
            <li>{marca} - {AnoLancamento}</li>


        </>
    )
}

Item.propTypes = {
    marca: Proptypes.string.isRequired,
    AnoLancamento: Proptypes.number.isRequired
}
Item.defaultProps = {
    marca: 'Faltou a marca',
    AnoLancamento: 0
}
export default Item