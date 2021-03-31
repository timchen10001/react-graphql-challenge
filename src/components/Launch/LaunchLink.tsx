import React, { AnchorHTMLAttributes } from "react";

type LaunchLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className: string;
  href?: string | undefined | null;
  name: string;
  nameBreak?: boolean;
  description?: string | undefined | null;
};

export const LaunchLink: React.FC<LaunchLinkProps> = ({
  className,
  href,
  name,
  nameBreak = false,
  description,
  ...props
}) => {
  return !href || !description ? null : (
    <>
      <br />
      {name}：{nameBreak ? <br /> : null}
      <a {...props} className={className} href={href}>
        {description}
      </a>
      <br />
    </>
  );
};
