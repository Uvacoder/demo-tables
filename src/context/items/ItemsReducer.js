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

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
        return{
            ...state,
            items: [...state.items, action.payload]
        }
    default:
      return state;
  }
};
