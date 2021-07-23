import { Component } from 'react';
import Aside from './Aside';

// Les props servent à faire communiquer parent et enfants.

class Rocket extends Component {
    // Avant RENDER : JavaScript CLASSIQUE
    constructor() {
        super();

        this.state = {
            variable: 'Variable du state du composant Rocket',
            address: {
                street: 'qqchose',
                zipcode: 92090,
            },
        };

        this.updateStreetAddress = this.updateStreetAddress.bind(this);
    }

    updateStreetAddress() {
        console.log('ici');
        this.setState({ variable: 'changement de variable' });
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <h2>Rocket</h2>
                {/*<Main />*/}
                <Aside
                    exampleProp={this.state.variable}
                    direction={this.state.address}
                    propPourMettreAJourVariable={this.updateStreetAddress}
                />
            </div>
        );
    }
}

export default Rocket;
