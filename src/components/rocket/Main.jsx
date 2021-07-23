import { Component, Fragment } from 'react';
import Aside from './Aside';

import moon from '../../rocket-assets/images/fullmoon.png';
import launchingRamp from '../../rocket-assets/images/launching-ramp.png';
import firingBtn from '../../rocket-assets/images/firing-button.png';
import cancelBtn from '../../rocket-assets/images/cancel-button.png';
import rocket1 from '../../rocket-assets/images/rocket1.png';
import Stars from './Stars';

class Main extends Component {
    state = {};

    startRocket() {}

    stopRocket() {}

    render() {
        return (
            <Fragment>
                <main>
                    <img id="moon" src={moon} alt="Fullmoon" />
                    <Aside />
                    <img
                        id="launching-ramp"
                        src={launchingRamp}
                        alt="Launching ramp"
                    />
                    <img
                        id="firing-button"
                        src={firingBtn}
                        alt="Firing button"
                        onClick={this.startRocket}
                    />
                    <img
                        id="cancel-button"
                        src={cancelBtn}
                        alt="Cancel button"
                        onClick={this.stopRocket}
                    />
                    <img id="rocket" src={rocket1} alt="rocket" />
                </main>
                <Stars quantity="150" />
            </Fragment>
        );
    }
}

export default Main;
