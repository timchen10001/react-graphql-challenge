import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CustomParticle } from "./components/CustomParticle";
import { Home } from "./pages/Home";
import "./styles/App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <CustomParticle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
