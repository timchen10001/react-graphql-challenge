import React, { useState } from "react";
import { Header } from "../components/Header";
import { YTEmbed } from "../components/YTEmbed";
import { useLaunchesPastQuery } from "../generated/graphql";
import { usePagination } from "../hooks/usePagination";
import { useStateValue } from "../providers/StateProvider";
import "../styles/Home.scss";
import { getYTIdFromLink } from "../utils/getYTIdFromLink";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [{ limit, selected }] = useStateValue();
  const { handleOnWheel } = usePagination();
  const { loading, error, data } = useLaunchesPastQuery({
    variables: { limit },
  });
  if (error) return <div>{error}</div>;

  const target = selected === -1 ? null : data?.launchesPast?.[selected];
  console.log(selected);
  return (
    <div className="home" onWheel={(e) => handleOnWheel(e)}>
      <Header />
      {!target ? null : (
        <div className="item">
          <ul className="wrapper">
            <h2 className="title">{target?.mission_name}</h2>
            <p>
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
            <YTEmbed
              style={{
                width: "560px",
                height: "315px",
                maxWidth: "100vw",
                maxHeight: "100vh",
                borderRadius: "10px",
              }}
              videoId={getYTIdFromLink(target.links?.video_link)}
              title={target.mission_name || ""}
            />
          </ul>
        </div>
      )}
    </div>
  );
};
