import { createContext, useContext, useReducer } from "react";
import { IStateValue } from "../types";

const StateContext = createContext({});

export const StatePorvider = ({ initialState, reducer, children }: any) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () =>
  useContext(StateContext) as [IStateValue, any];
