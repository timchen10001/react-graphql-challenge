import { Maybe } from "graphql/jsutils/Maybe";

export const getYTIdFromLink = (link: Maybe<string> | undefined): string => {
  if (typeof link !== "string" || !link.includes("/")) {
    return "aVFPzTDCihQ";
  }
  const splitedLink = link.split("/");
  return splitedLink[splitedLink.length - 1];
};
