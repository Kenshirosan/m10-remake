import React from "react";
import PropTypes from "prop-types";

const CustomSelect = (props) => {
  return (
    <select name={props.name} id={props.id} onChange={props.onChange}>
      {props.data.map((d, index) => {
        return (
          <option key={index} value={d.value}>
            {d.text}
          </option>
        );
      })}
    </select>
  );
};

CustomSelect.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
