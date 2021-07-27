import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ categories }) => {
    return <div className="btn-container">
        {categories.map((category, index) => <button key={index}>{category}</button>)}
    </div>;
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default Categories;
