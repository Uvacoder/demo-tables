import React, { useContext } from "react";
import { Table} from "reactstrap";
import TableItem from "./TableItem";
import ItemsContext from "../../../context/items/ItemsContext";

const Tables = () => {
  const itemsContext = useContext(ItemsContext);


  return (
    <div>
      <Table responsive hover striped>
        <TableItem />
      </Table>
    </div>
  );
};

export default Tables;
