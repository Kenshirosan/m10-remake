import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ categories, filterProducts }) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => (
                <button onClick={() => filterProducts(category)} key={index}>
                    {category}
                </button>
            ))}
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
    filterProducts: PropTypes.func.isRequired,
};

export default Categories;
