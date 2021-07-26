import React, { Fragment, useState } from 'react';
import data from './data';
import MenuList from './MenuList';
import './menu.css';
import Categories from './Categories';

const Menu = () => {
    const [items, setItems] = useState(data);

    return (
        <Fragment>
            <Categories />
            <MenuList products={items} />
        </Fragment>
    );
};

export default Menu;
