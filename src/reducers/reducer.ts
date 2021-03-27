import { IAction, IStateValue } from "../types";

export const initialState: IStateValue = {
  dispatching: false,
  selected: -1,
  limit: 10,
};

export enum actionType {
  SET_DISPATCHING = "SET_DISPATCHING",
  SET_SELECTED = "SET_SELECTED",
  SET_LIMIT = "SET_LIMIT",
}

const reducer = (state: IStateValue, action: IAction): IStateValue => {
  switch (action.type) {
    case actionType.SET_DISPATCHING:
      return {
        ...state,
        dispatching: action.dispatching,
      };
    case actionType.SET_SELECTED:
      return {
        ...state,
        selected: action.selected,
      };
    case actionType.SET_LIMIT:
      return {
        ...state,
        selected: action.limit,
      };
    default:
      return state;
  }
};

export default reducer;
