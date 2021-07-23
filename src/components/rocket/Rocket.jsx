import { Component } from 'react';
import Aside from './Aside';
import Main from './Main';
// Les props servent à faire communiquer parent et enfants.

class Rocket extends Component {
    // Avant RENDER : JavaScript CLASSIQUE

    render() {
        return (
            <section className="chart">
                <Main />
            </section>
        );
    }
}

export default Rocket;
