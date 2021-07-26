import React from 'react';
import PropTypes from 'prop-types';
import './menu.css';

const MenuList = props => {
    return (
        <div>
            Menu
            <div className="btn-container">
                <button>Un</button>
                <button>Deux</button>
                <button>Trois</button>
                <button>Quatre</button>
            </div>
        </div>
    );
};

MenuList.propTypes = {};

export default MenuList;
