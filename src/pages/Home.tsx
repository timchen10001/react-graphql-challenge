import React, { useState } from "react";
import { Header } from "../components/Header";
import { YTEmbed } from "../components/YTEmbed";
import { useLaunchesPastQuery } from "../generated/graphql";
import { usePagination } from "../hooks/usePagination";
import useRWD from "../hooks/useRWD";
import { useStateValue } from "../providers/StateProvider";
import "../styles/Home.scss";
import { difference } from "../utils/difference";
import { getYTIdFromLink } from "../utils/getYTIdFromLink";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [{ limit, selected }] = useStateValue();
  const { handleOnWheel } = usePagination();
  const device = useRWD();
  const { loading, error, data } = useLaunchesPastQuery({
    variables: { limit },
  });
  if (error) return <div>{error}</div>;

  const target = selected === -1 ? null : data?.launchesPast?.[selected];

  return (
    <div
      className="home"
      onWheel={(e) => {
        if (device !== "PC") return;
        handleOnWheel(e);
      }}
    >
      <Header />
      {!target ? null : (
        <div id={`item-${selected}`} className="item">
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
            {!target.links?.video_link ? null : (
              <YTEmbed
                className="embed__video"
                style={{
                  width: device === "mobile" ? "100%" : "560px",
                  minHeight: "350px",
                  borderRadius: "12px",
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
