import React, {useEffect, useState} from 'react';
import data from './data';
import MenuList from './MenuList';
import './menu.css';
import Categories from './Categories';

const Menu = () => {
    const [items, setItems] = useState(data);
    const [categories, setCategories] = useState([]);


    // Filtrer les catégories quand on clique sur un bouton :

    // Créer une fonction qui permet de 'répondre au clique' (console.log)

    // Passez cette fonction en prop au composant Categories

    // En suite, faire en sorte que la fonction mette a jour le state : le state ne contiendra que les items appartenant à la catégorie sur laquelle on a cliqué.

    // Si category === 'Tout' : On affiche tout

    // Si category === '?' : On FILTRE les items

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
    textAlign: 'center'
}

export default Menu;
