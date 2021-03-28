import "../styles/Header.scss";
import React, { useEffect } from "react";
import { useStateValue } from "../providers/StateProvider";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    setTimeout(() => {
      const headerClassSet = document.querySelector(".header")?.classList;
      headerClassSet?.add("fadeout");
      setTimeout(() => {
        headerClassSet?.add("hide");
        dispatch({ type: "SET_SELECTED", selected: 0 });
      }, 1500);
    }, 1500);
  }, []);
  return <div className="header"></div>;
};
