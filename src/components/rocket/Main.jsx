import { Component } from 'react';
import Aside from './Aside';

import launchingRamp from '../../rocket-assets/images/launching-ramp.png';

class Main extends Component {
    render() {
        return (
            <main>
                <img id="moon" src="images/fullmoon.png" alt="Fullmoon" />
                <Aside />
                <img
                    id="launching-ramp"
                    src={launchingRamp}
                    alt="Launching ramp"
                />
                <img
                    id="firing-button"
                    src="images/firing-button.png"
                    alt="Firing button"
                />
                <img
                    id="cancel-button"
                    src="images/cancel-button.png"
                    alt="Cancel button"
                />
                <img id="rocket" src="images/rocket1.png" alt="rocket" />
            </main>
        );
    }
}

export default Main;
