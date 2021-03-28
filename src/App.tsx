import React from "react";
import { CustomParticle } from "./components/CustomParticle";
import { Home } from "./pages/Home";
import "./styles/App.scss";

const App: React.FC = () => {
  return (
    <>
      <CustomParticle />
      <Home />
    </>
  );
};

export default App;
