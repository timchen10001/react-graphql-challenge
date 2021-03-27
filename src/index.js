import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./providers/apolloClient";
import { StatePorvider } from "./providers/StateProvider";
import reducer, { initialState } from "./reducers/reducer";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <StatePorvider initialState={initialState} reducer={reducer}>
        <App />
      </StatePorvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
