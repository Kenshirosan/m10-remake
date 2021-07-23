import { Component } from 'react';
import PropTypes from 'prop-types';

class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfStars: this.props.quantity,
            stars: [],
            starSize: ['tiny', 'normal', 'big'],
        };
    }

    componentDidMount() {
        this.generateStars();
    }

    generateRandomNumber(max = 3) {
        return Math.floor(Math.random() * max);
    }

    generateStars() {
        let elements = [];
        for (let i = 0; i < this.state.numberOfStars; i++) {
            const size = this.generateRandomNumber();
            const starSize = this.state.starSize[size];

            let element = (
                <div
                    key={i}
                    className={`star ${starSize}`}
                    style={{
                        left: this.generateRandomNumber(window.innerWidth),
                        top: this.generateRandomNumber(window.innerHeight),
                    }}
                />
            );

            elements = [element, ...elements];
        }
        this.setState({ stars: elements });
    }

    render() {
        return <div>{this.state.stars}</div>;
    }
}

Stars.propTypes = {
    quantity: PropTypes.number.isRequired,
};

export default Stars;
