import { Component } from 'react';
import PropTypes from 'prop-types';

class Aside extends Component {
    render() {
        return (
            <aside id="billboard">
                <span>{this.props.decompte}</span>
            </aside>
        );
    }
}

Aside.propTypes = {
    decompte: PropTypes.string,
};

export default Aside;
