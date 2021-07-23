import { Component, Fragment } from 'react';
import { defaults } from 'react-chartjs-2';

// Disable animating charts by default.

import Aside from './Aside';
import { Doughnut } from 'react-chartjs-2';

import moon from '../../rocket-assets/images/fullmoon.png';
import launchingRamp from '../../rocket-assets/images/launching-ramp.png';
import firingBtn from '../../rocket-assets/images/firing-button.png';
import cancelBtn from '../../rocket-assets/images/cancel-button.png';

import Stars from './Stars';

// Import dynamique
(async function () {
    const { default: foo } = await import('../../rocket-assets/images/firing-button.png');
})();

let rocket = require('../../rocket-assets/images/rocket1.png').default;

class Main extends Component {
    constructor() {
        super();
        this.state = {
            started: false,
            compteArebours: 3,
            intervalId: 0,
            timelapse: 1000,
            rocket,
            data: {
                labels: ['Variant 1', 'Variant 2', 'Variant 3', 'Variant 4', 'Variant Delta'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [28, 16, 7, 3, 75],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(75, 192, 192)',
                            'rgb(255, 205, 86)',
                            'rgb(201, 203, 207)',
                            'rgb(54, 162, 235)',
                        ],
                    },
                ],
            },

            options: {
                maintainAspectRatio: false,
                offset: [40, 0, 0, 0, 0],
            },
        };
    }

    startRocket() {
        this.setState({
            rocket: require('../../rocket-assets/images/rocket2.gif').default,
        });

        let intervalId = setInterval(() => {
            //
            if (this.state.compteArebours <= 0) {
                this.rocketDecolle();
                return clearInterval(this.state.intervalId);
            }

            this.setState({ compteArebours: this.state.compteArebours - 1 });
            //
        }, this.state.timelapse);

        this.setState({ intervalId: intervalId });
    }

    rocketDecolle() {
        this.setState({
            rocket: require('../../rocket-assets/images/rocket3.gif').default,
            started: true,
        });
    }

    stopRocket() {
        this.setState({
            rocket: require('../../rocket-assets/images/rocket1.png').default,
            started: false,
        });
        return clearInterval(this.state.intervalId);
    }

    render() {
        return (
            <Fragment>
                <Doughnut height={600} data={this.state.data} options={this.state.options} />
                {/*<main>*/}
                {/*    <img id="moon" src={moon} alt="Fullmoon" />*/}
                {/*    <Aside decompte={this.state.compteArebours} />*/}
                {/*    <img id="launching-ramp" src={launchingRamp} alt="Launching ramp" />*/}
                {/*    <img id="firing-button" src={firingBtn} alt="Firing button" onClick={this.startRocket.bind(this)} />*/}
                {/*    <img id="cancel-button" src={cancelBtn} alt="Cancel button" onClick={this.stopRocket.bind(this)} />*/}
                {/*    <img*/}
                {/*        id="rocket"*/}
                {/*        src={this.state.rocket}*/}
                {/*        alt="rocket"*/}
                {/*        className={this.state.started ? 'tookOff' : null}*/}
                {/*    />*/}
                {/*</main>*/}
                {/*<Stars quantity={150} />*/}
            </Fragment>
        );
    }
}

export default Main;
