import React, { useReducer } from "react";
import ItemsContext from "./ItemsContext";
import itemsReducer from "./ItemsReducer";

import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  FILTER_ITEM,
  CLEAR_FILTER,
  CLEAR_CURRENT,
  SET_ALERT,
  SET_CURRENT,
  REMOVE_ALERT,
} from "../Types";

const ItemState = (props) => {
  const initialState = {
    items: [
      {
        id: 1,
        item: "Diphynyl DT",
        open: "210",
        prod: "20",
        closing: "230",
        price: "#40,000",
        name: "John",
      },
      {
        id: 2,
        item: "Tryphynyl DT",
        open: "230",
        prod: "30",
        closing: "260",
        price: "#70,000",
        name: "Tayo",
      },
      {
        id: 3,
        item: "Pephynyl DT",
        open: "260",
        prod: "10",
        closing: "270",
        price: "#20,000",
        name: "John",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(itemsReducer, initialState);

  //Add Item
  const addItem=(items)=>{
      items.id=4
      dispatch({type: ADD_ITEM, payload:items})
  }

  //Delete Item

  //Edit Item

  //Filter Item

  //Clear Filter

  //Set Current

  //Clear Current

  //Set Alert

  //Remove Alert

  return (
    <ItemsContext.Provider
      value={{
        items: state.items,
        current: state.current,
        filtered: state.filtered,
        addItem
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemState;
