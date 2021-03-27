import React, { IframeHTMLAttributes } from "react";

interface YTEmbedProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  videoId: string;
}

export const YTEmbed: React.FC<YTEmbedProps> = ({
  videoId,
  ...props
}) => {
  return (
    <iframe
      {...props}
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
