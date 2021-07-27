import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MenuList = ({ products }) => {
    return (
        <article>
            {products.map(product => (
                <p key={product.id}>{product.name}</p>
            ))}
        </article>
    );
};

MenuList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default MenuList;
