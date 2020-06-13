import { useReducer } from "react";
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


const ItemState=()=>{
    const [state, dispatch] = useReducer(itemsReducer, initialState)

    return(
        <ItemsContext.Provider
        value={{

        }}>
            {props.children}
        </ItemsContext.Provider>
    )
}

export default ItemState