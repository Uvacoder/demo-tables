import React, { useContext } from "react";
import { Table} from "reactstrap";
import TableItem from "./TableItem";

const Tables = () => {
  return (
    <div>
      <Table responsive hover striped>
        <TableItem />
      </Table>
    </div>
  );
};

export default Tables;
