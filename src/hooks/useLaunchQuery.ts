import { ApolloError } from "@apollo/client";
import {
  Launch,
  useLaunchesPastQuery,
  useLaunchNextQuery,
} from "../generated/graphql";
import { useStateValue } from "../providers/StateProvider";

interface ILaunchQuery {
  data: (Launch | null | undefined)[];
  error?: ApolloError;
}

export const useLaunchQuery = (): ILaunchQuery => {
  const [{ limit }, dispatch] = useStateValue();
  const { data: nextQuery, error: nextError } = useLaunchNextQuery();
  const { data: pastQuery, error: pastError } = useLaunchesPastQuery({
    variables: { limit },
  });
  if (pastQuery?.launchesPast && Array.isArray(pastQuery.launchesPast)) {
    const launchQuery = [...pastQuery.launchesPast, nextQuery?.launchNext];
    dispatch({ type: "SET_LIMT", limit: launchQuery.length });
    return { data: launchQuery, error: pastError || nextError };
  }
  return { data: [null], error: pastError || nextError };
};
