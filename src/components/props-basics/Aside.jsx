import { Component } from 'react';
import PropTypes from 'prop-types';

class Aside extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.exampleProp,
            address: this.props.direction,
        };
    }

    componentDidMount() {}

    render() {
        const { exampleProp, propPourMettreAJourVariable } = this.props;
        const { user, address } = this.state;

        return (
            <div>
                <h2>Aside</h2>
                <p>prop : {exampleProp}</p>

                <p>prop mis dans le state de Aside : {user}</p>

                <div>
                    <p>{address.street}</p>
                    <p>{address.zipcode}</p>
                </div>

                <button onClick={() => propPourMettreAJourVariable()}>
                    Mettre à jour state.variable
                </button>
            </div>
        );
    }
}

Aside.propTypes = {
    exampleProp: PropTypes.string.isRequired,
    direction: PropTypes.object,
    propPourMettreAJourVariable: PropTypes.func,
};

export default Aside;
