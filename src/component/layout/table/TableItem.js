import React, {useContext} from "react";
import { Table } from "reactstrap";
import ItemsContext from "../../../context/items/ItemsContext";

const TableItem = () => {
  
  const itemsContext = useContext(ItemsContext)

  const {contacts} = itemsContext


  return (
    <div>
      <div>
        <div>
          <h1 className="h2">Dashboard</h1>
        </div>
      </div>
        <h1>Text</h1>

    </div>
  );
};

export default TableItem;
