import React, { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import { YTEmbed } from "../components/YTEmbed";
import { Launch, useLaunchesPastQuery } from "../generated/graphql";
import { usePagination } from "../hooks/usePagination";
import useRWD from "../hooks/useRWD";
import { useTarget } from "../hooks/useTarget";
import { useStateValue } from "../providers/StateProvider";
import "../styles/Home.scss";
import { difference } from "../utils/difference";
import { getYTIdFromLink } from "../utils/getYTIdFromLink";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { handleOnWheel, handleTouchMove } = usePagination();
  const { target, error } = useTarget();
  const device = useRWD();
  const isMobile = device === "mobile";
  if (error) return <div>{error}</div>;
  var lastClientY = 0;
  return (
    <div
      className="home"
      onWheel={(e) => {
        if (device !== "PC") return;
        handleOnWheel(e);
      }}
      onTouchStart={e => {
        if (device !== "mobile") return;
        lastClientY = e.changedTouches[0].clientY;
      }}
      onTouchMove={(e) => {
        if (device !== "mobile") return;
        const clientY = e.changedTouches[0].clientY;
        const isScollDownByTouchMove = clientY - lastClientY < 0; // scroll down
        const diff = difference(clientY, lastClientY)
        const withEnoughMoves = diff > 30;
        console.log({ isScollDownByTouchMove, diff })
        handleTouchMove(withEnoughMoves ? isScollDownByTouchMove : undefined);
      }}
    >
      <Header />
      {!target ? null : (
        <div className="item">
          <ul
            className="wrapper"
            style={{ width: isMobile ? "100vw" : "90vw" }}
          >
            <h2 className="title">{target?.mission_name}</h2>
            <p style={{ padding: isMobile ? "0 5vw" : "0" }}>
              <span>{target?.details}</span>
              <br />
              <span>{target.rocket?.rocket_name}</span>
              <br />
              <span>{target.rocket?.rocket_type}</span>
              <br />
              <span>{target.launch_date_local}</span>
              <br />
              <span>{target.links?.article_link}</span>
            </p>
            {!target.links?.video_link ? null : (
              <YTEmbed
                className="embed__video"
                style={{
                  width: isMobile ? "100%" : "560px",
                  minHeight: isMobile ? "350px" : "380px",
                  borderRadius: isMobile ? "0" : "12px",
                }}
                videoId={getYTIdFromLink(target.links?.video_link)}
                title={target.mission_name || ""}
              />
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
