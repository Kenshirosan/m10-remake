import { Fragment } from "react";
import PropTypes from "prop-types";

const CustomInput = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        name={props.name}
        type={props.type}
        id={props.id}
        onChange={props.onChange}
      />
    </Fragment>
  );
};

CustomInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomInput;
