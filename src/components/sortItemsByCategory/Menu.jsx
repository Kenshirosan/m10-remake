import React, { useEffect, useState } from 'react';
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

    // Filtrer les catégories quand on clique sur un bouton :

    // Créer une fonction qui permet de 'répondre au clique' (console.log)
    const filterProducts = category => {
        // Si category === 'Tout' : On affiche tout
        if (category === 'Tout') {
            return setItems(data);
        }
        // En suite, faire en sorte que la fonction mette a jour le state :
        // le state ne contiendra que les items appartenant à la catégorie sur laquelle on a cliqué.

        // Si category === '?' : On FILTRE les items
        const filteredProducts = data.filter(product => product.category === category);

        return setItems(filteredProducts);
    };

    return (
        <section style={style}>
            <Categories categories={categories} filterProducts={filterProducts} />
            <MenuList products={items} />
        </section>
    );
};

const style = {
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
};

export default Menu;
