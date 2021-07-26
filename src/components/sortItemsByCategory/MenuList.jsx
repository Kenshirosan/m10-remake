import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MenuList = ({ products }) => {
    return (
        <section>
            {products.map(product => (
                <p>{product.name}</p>
            ))}
        </section>
    );
};

MenuList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default MenuList;
