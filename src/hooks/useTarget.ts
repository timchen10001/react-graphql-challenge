import { useEffect, useRef, useState } from "react";
import { Launch } from "../generated/graphql";
import { useStateValue } from "../providers/StateProvider";
import { useLaunchQuery } from "./useLaunchQuery";

export const useTarget = () => {
  const renderConunter = useRef(0);
  const [target, setTarget] = useState<Launch | null | undefined>(null);
  const [{ selected }] = useStateValue();
  const { data: launchQuery, error } = useLaunchQuery();
  useEffect(() => {
    setTarget(selected === -1 ? null : launchQuery?.[selected]);
    renderConunter.current++;
    console.log(
      `TargetComponent has re-render ${renderConunter.current} times ~`
    );
  }, [selected]);
  return { target, error };
};
