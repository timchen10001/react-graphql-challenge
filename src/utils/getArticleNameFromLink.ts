export const getArticleNameFromLink = (articleLink: string | undefined | null) => {
  if (!articleLink || !articleLink?.includes("/")) {
    return "";
  }
  const splitedLink = articleLink.split("/");
  let Name: string = "";
  let i = splitedLink.length;
  while (i > 0 && !(Name = splitedLink[i--]));
  return Name.replaceAll("-", " ");
};
