import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ categories }) => {
    return <div className="btn-container">
        <button>1</button>
        <button>2</button>
        <button>3</button>
    </div>;
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default Categories;
