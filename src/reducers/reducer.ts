import { __launches_past_limit__ } from "../constants";
import { IAction, IStateValue } from "../types";

export const initialState: IStateValue = {
  dispatching: false,
  selected: -1,
  limit: __launches_past_limit__+1,
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
        limit: action.limit
      };
    default:
      return state;
  }
};

export default reducer;
