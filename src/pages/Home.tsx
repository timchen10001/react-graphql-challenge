import "../styles/Home.scss";
import React from "react";
import { useLaunchesPastQuery } from "../generated/graphql";
import { Header } from "../components/Header";
import { YTEmbed } from "../components/YTEmbed";
import { CustomParticle } from "../components/CustomParticle";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const { loading, error, data } = useLaunchesPastQuery({
    variables: { limit: 10 },
  });

  let body: any = null;
  if (error) body = <div>{error}</div>;
  if (loading) body = <div>Loading···</div>;

  console.log(data);
  return (
    <div className="home">
      <Header />
      {body}
      <YTEmbed 
        width={560}
        height={315}
        videoId={"aVFPzTDCihQ"}
        title={"Sentinel-6 Michael Freilich Mission2"}
      />
    </div>
    // <div>hi</div>
  );
};
