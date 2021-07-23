import { Component } from 'react';
import Aside from './Aside';
import Main from './Main';
// Les props servent à faire communiquer parent et enfants.

class Rocket extends Component {
    // Avant RENDER : JavaScript CLASSIQUE
    constructor() {
        super();
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <h2>Rocket</h2>
                <Main />
                <Aside />
            </div>
        );
    }
}

export default Rocket;
