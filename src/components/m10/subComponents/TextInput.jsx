import PropTypes from "prop-types";

const TextInput = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.handleOnChange}
    />
  );
};

TextInput.defaultProps = {
  type: "text",
};

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default TextInput;
