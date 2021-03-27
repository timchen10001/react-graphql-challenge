export interface IStateValue {
  dispatching: boolean;
  selected: number;
  limit: number;
}

export interface IAction extends IStateValue {
  type: "SET_DISPATCHING" | "SET_SELECTED" | "SET_LIMIT";
}
