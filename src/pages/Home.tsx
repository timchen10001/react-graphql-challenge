import React from "react";
import { Header } from "../components/Header";
import { LaunchMission } from "../components/Launch/LaunchMission";
import { usePagination } from "../hooks/usePagination";
import useRWD from "../hooks/useRWD";
import { useTarget } from "../hooks/useTarget";
import "../styles/Home.scss";
import { difference } from "../utils/difference";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { handleOnWheel, handleTouchMove } = usePagination();
  const { target, error } = useTarget();
  const device = useRWD();
  var lastClientY = 0;

  return error ? (
    <div>{error}</div>
  ) : (
    <div
      className="home"
      onWheel={(e) => handleOnWheel(e)}
      onTouchStart={(e) => {
        if (device === "PC") return;
        lastClientY = e.changedTouches[0].clientY;
      }}
      onTouchMove={(e) => {
        if (device === "PC") return;
        const clientY = e.changedTouches[0].clientY;
        const isScollDownByTouchMove = clientY - lastClientY < 0; // scroll down
        const diff = difference(clientY, lastClientY);
        const withEnoughMoves = diff > 30;
        // console.log({ isScollDownByTouchMove, diff })
        handleTouchMove(withEnoughMoves ? isScollDownByTouchMove : undefined);
      }}
    >
      <Header />
      {!target ? null : (
        <div className="item">
          <ul className="wrapper">
            <LaunchMission target={target} variant={device} />
          </ul>
        </div>
      )}
    </div>
  );
};
