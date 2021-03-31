import { ApolloError } from "@apollo/client";
import { __launches_past_limit__ } from "../constants";
import {
  Launch,
  useLaunchesPastQuery,
  useLaunchNextQuery,
} from "../generated/graphql";

interface ILaunchQuery {
  data: (Launch | null | undefined)[];
  error?: ApolloError;
}

export const useLaunchQuery = (): ILaunchQuery => {
  const { data: nextQuery, error: nextError } = useLaunchNextQuery();
  const { data: pastQuery, error: pastError } = useLaunchesPastQuery({
    variables: { limit: __launches_past_limit__ },
  });
  if (pastQuery?.launchesPast && Array.isArray(pastQuery.launchesPast)) {
    const launchesPast: (Launch | null | undefined)[] = [];
    pastQuery.launchesPast.forEach((l) => launchesPast.push(l));
    launchesPast.reverse();
    launchesPast.push(nextQuery?.launchNext);
    return { data: launchesPast, error: pastError || nextError };
  }
  return { data: [null], error: pastError || nextError };
};
