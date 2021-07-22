import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTask extends Component {
    state = {
        title: '',
    };

    recordInputValue(e) {
        this.setState({ title: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        // Créer une tâche

        let task = {
            id: Math.random().toString(16),
            title: this.state.title,
            done: false,
        };

        this.props.createTask(task);
        e.target.reset();
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <fieldset>
                    <ul>
                        <li>
                            <legend>Ajoutez une tâche </legend>
                            <input
                                onChange={this.recordInputValue.bind(this)}
                                type="text"
                                name="title"
                            />
                            <button style={btnStyle} type="submit">
                                Créer une tâche
                            </button>
                        </li>
                    </ul>
                </fieldset>
            </form>
        );
    }
}

AddTask.propTypes = {
    createTask: PropTypes.func.isRequired,
};

const btnStyle = {
    marginLeft: '1em',
};

export default AddTask;
