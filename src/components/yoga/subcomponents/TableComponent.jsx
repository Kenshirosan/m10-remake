import React from "react";
import { appointements } from "../data";
import Appointement from "./Appointement";

const TableComponent = (props) => {
  return (
    <table>
      <caption>{props.caption}</caption>
      <thead>
        <tr>
          <th colSpan="3">Yoga du rire avec Jacqueline (Paris)</th>
        </tr>
      </thead>
      <tbody>
        {appointements.map((appointement, index) => {
          return (
            <Appointement
              key={index}
              day={appointement.day}
              hour={appointement.hour}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
