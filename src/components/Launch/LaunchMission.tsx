import React from "react";
import { Launch } from "../../generated/graphql";
import { RWDVariant } from "../../hooks/useRWD";
import "../../styles/LaunchMission.scss";
import { getArticleNameFromLink } from "../../utils/getArticleNameFromLink";
import { LaunchEmbedFrame } from "./LaunchEmbedFrame";
import { LaunchLink } from "./LaunchLink";
import { LaunchSpan } from "./LaunchSpan";

interface LaunchMissionProps {
  target: Launch;
  variant: RWDVariant;
}

export const LaunchMission: React.FC<LaunchMissionProps> = ({
  target,
  variant,
}) => {
  const isMobile = variant === "mobile";
  return (
    <>
      <h1 className="title">{target?.mission_name}</h1>
      <p className="text" style={{ padding: variant !== "PC" ? "0 5vw" : "0" }}>
        <LaunchSpan
          className="rocket"
          name="🚀 Rocket"
          content={target.rocket?.rocket_name}
        />
        <LaunchSpan className="id" name="🚩 ID" content={target.id} />
        <LaunchSpan
          className="type"
          name="✨ Types"
          content={target.rocket?.rocket_type}
        />
        <LaunchSpan
          className="state"
          name="✔️ State"
          content={target.launch_success ? "Success" : "Failure"}
        />
        <LaunchSpan
          className="date"
          name="📅 Date"
          style={{ fontSize: "16px" }}
          content={target.launch_date_local}
        />
        <LaunchSpan
          className="site"
          name="📍 Site"
          content={target.launch_site?.site_name_long}
        />
        <LaunchLink
          className="article__link"
          href={target?.links?.article_link || ""}
          target="_blank"
          name="✨ Article"
          nameBreak={true}
          description={getArticleNameFromLink(target?.links?.article_link)}
        />
        <LaunchSpan
          className="detail"
          name="💡 Details"
          nameBreak={true}
          beforeBreak={true}
          content={target.details}
        />
        <LaunchEmbedFrame
          link={target.links?.video_link}
          title={target.rocket?.rocket_name || ""}
          name="🔗 Video"
          nameBreak={true}
          style={{
            width: "100%",
            minHeight: isMobile ? "350px" : "600px",
            borderRadius: isMobile ? "0" : "12px",
          }}
        />
        <br/>
      </p>
    </>
  );
};
