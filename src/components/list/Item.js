import PropTypes from 'prop-types'

function Item({brand, year}) {
    return (
        <>
            <li>Marca: {brand} - Ano lançamento: {year}</li>
        </>
    )
}

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
}

Item.defaultProps = {
    brand: 'missing',
    year : 0,
}

export default Item;