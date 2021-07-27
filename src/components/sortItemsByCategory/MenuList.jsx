import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MenuList = ({ products }) => {
    return (
        <Fragment>
            {products.map(product =>  {
                return <article className="card">
                    <img src={product.img} alt="Menu Item" style={{ width: '100%' }}/>
                    <div className="container">
                        <h4>{product.name}</h4>
                        <p>{product.category}</p>
                    </div>
                </article>
            })}
        </Fragment>
    );
};

MenuList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default MenuList;
