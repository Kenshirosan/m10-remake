import PropTypes from 'prop-types';

const User = ({ user }) => {
    return (
        <ul>
            <li>
                <a href="!#">{user.username}</a>
            </li>
        </ul>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;
