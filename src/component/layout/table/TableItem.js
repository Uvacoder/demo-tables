import React, { useContext } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import ItemsContext from "../../../context/items/ItemsContext";

const TableItem = (item) => {
  const itemsContext = useContext(ItemsContext);

  const { items, deleteItem } = itemsContext;
  
  const onDelete=()=>{
     
  }

  return (
    <div>
      <thead>
        <tr>
          <th>#</th>
          <th>Name of Items</th>
          <th>Opening stock</th>
          <th>Daily Production</th>
          <th>Closing stock</th>
          <th>Price</th> 
          <th>Your Name</th>
          <th></th>
        </tr>
      </thead>
      {items.map((item) => (
        <tbody key={item.id}>
          <tr>
            <th>{item.id}</th>
            <td>{item.item}</td>
            <td>{item.open}</td>
            <td>{item.prod}</td>
            <td>{item.closing}</td>
            <td>{item.price}</td>
            <td>{item.name}</td>
            <td>
              <Button color="success">
                <FontAwesomeIcon icon={faEdit} />
              </Button>{" "}
              <Button color="danger">
                <FontAwesomeIcon icon={faTrashAlt} onClick={onDelete} />
              </Button>
            </td>
          </tr>
        </tbody>
      ))}
    </div>
  );
};

export default TableItem;