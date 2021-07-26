import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Props destructuré
const AddTask = ({ createTask }) => {
    // 1er argument : propriété du state; 2ème argument : la fonction pour modifier le state
    let [title, setTitle] = useState('');

    const recordInputValue = e => {
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Créer une tâche
        let task = {
            id: Math.random().toString(16),
            title: title, // Le but est d'écrire une seule fois title
            done: false,
        };

        createTask(task);

        e.target.reset();
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <fieldset>
                <ul>
                    <li>
                        <legend>Ajoutez une tâche </legend>
                        <input onChange={recordInputValue} type="text" name="title" />
                        <button style={btnStyle} type="submit">
                            Créer une tâche
                        </button>
                    </li>
                </ul>
            </fieldset>
        </form>
    );
};

AddTask.propTypes = {
    createTask: PropTypes.func.isRequired,
};

const btnStyle = {
    marginLeft: '1em',
};

export default AddTask;
