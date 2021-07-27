import React, {useEffect, useState} from 'react';
import data from './data';
import MenuList from './MenuList';
import './menu.css';
import Categories from './Categories';

const Menu = () => {
    const [items, setItems] = useState(data);
    const [categories, setCategories] = useState([]);



    useEffect(() => {
        const filtered = items.map(item => item.category);

        const filteredCategories = new Set(filtered);

        setCategories(['Tout', ...filteredCategories]);

    }, []);

    return (
        <section style={style}>
            <Categories categories={categories} />
            <MenuList products={items} />
        </section>
    );
};

const style = {
    width: '80%',
    margin: 'auto',
}

export default Menu;
