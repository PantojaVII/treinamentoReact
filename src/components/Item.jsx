import Proptypes from 'prop-types'

function Item({marca, AnoLancamento }) {
    return (
        <>
            <li>{marca} - {AnoLancamento}</li>
            

        </>
    )
}

Item.propTypes = {
    marca:Proptypes.string
}
export default Item