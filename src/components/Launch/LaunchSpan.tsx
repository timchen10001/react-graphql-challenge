import React from "react";

type LaunchSpanProps = React.HTMLAttributes<HTMLSpanElement> & {
  className: string;
  name: string;
  nameBreak?: boolean;
  beforeBreak?: boolean;
  content: string | undefined | null;
};

export const LaunchSpan: React.FC<LaunchSpanProps> = ({
  className,
  name,
  nameBreak = false,
  beforeBreak = false,
  content,
  ...props
}) => {
  return !content?.length ? null : (
    <>
      {beforeBreak ? <br /> : null}
      {name}：{nameBreak ? <br /> : null}
      <span {...props} className={className}>
        {content}
      </span>
      <br />
    </>
  );
};
