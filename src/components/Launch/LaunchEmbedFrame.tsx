import React, { IframeHTMLAttributes } from "react";
import { getYTIdFromLink } from "../../utils/getYTIdFromLink";
import { YTEmbed } from "../YTEmbed";

type LaunchEmbedFrameProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  link: string | undefined | null;
  name: string;
  nameBreak?: boolean;
  title: string;
};

export const LaunchEmbedFrame: React.FC<LaunchEmbedFrameProps> = ({
  link,
  title,
  name,
  nameBreak = false,
  ...props
}) => {
  return !link ? null : (
    <>
      <br />
      {name}：{nameBreak ? <br /> : null}
      <YTEmbed
        {...props}
        className="embed__video"
        videoId={getYTIdFromLink(link)}
        title={title || ""}
      />
      <br />
    </>
  );
};
