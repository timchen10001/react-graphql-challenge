import '../styles/LaunchMission.scss';
import React from "react";
import { Launch } from "../generated/graphql";
import { getArticleNameFromLink } from "../utils/getArticleNameFromLink";
import { getYTIdFromLink } from "../utils/getYTIdFromLink";
import { YTEmbed } from "./YTEmbed";

interface LaunchMissionProps {
  target: Launch;
  isMobile: boolean;
}

export const LaunchMission: React.FC<LaunchMissionProps> = ({
  target,
  isMobile,
}) => {
  return (
    <>
      <h1 className="title">{target?.mission_name}</h1>
      <p className="text" style={{ padding: isMobile ? "0 5vw" : "0" }}>
        <span className="rocket">{`Rocket：${target.rocket?.rocket_name}`}</span>
        <br />
        <span className="type">{`Type：${target.rocket?.rocket_type}`}</span>
        <br />
        <span className="date">{`Date：${target.launch_date_local}`}</span>
        <br />
        <br />
        <span className="detail">
          Details：
          <br />
          {target.details}
        </span>
        <br />
        {typeof target.links?.article_link !== "string" ? null : (
          <>
            <br />
            <a className="article__link" href={target.links.article_link}>
              {getArticleNameFromLink(target.links?.article_link)}
            </a>
          </>
        )}
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
    </>
  );
};
