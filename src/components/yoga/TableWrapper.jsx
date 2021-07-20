import React, { Fragment } from "react";
import TableComponent from "./subcomponents/TableComponent";

const TableWrapper = () => {
  return (
    <Fragment>
      <TableComponent caption="Réserver votre place pour le prochain cours de Yoga du rire !" />
      <TableComponent caption="Yoga du rire avec Roger (Marseille)" />
    </Fragment>
  );
};

export default TableWrapper;
