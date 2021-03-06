import { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
    render() {
        const { user } = this.props;

        return (
            <ul>
                <li>
                    <a href="!#">{user.username}</a>
                </li>
            </ul>
        );
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;
