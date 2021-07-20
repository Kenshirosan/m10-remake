import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button type={props.type} name={props.name}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  name: "button",
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
