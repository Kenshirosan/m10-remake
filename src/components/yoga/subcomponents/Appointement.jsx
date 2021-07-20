import React from "react";
import PropTypes from "prop-types";

const Appointement = (props) => {
  return (
    <tr>
      <td>{props.day}</td>
      <td>{props.hour}</td>
      <td>
        <a href="!#">Réserver ce créneau</a>
      </td>
    </tr>
  );
};

Appointement.propTypes = {
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
};

export default Appointement;
