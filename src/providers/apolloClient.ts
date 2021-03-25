import { ApolloClient, InMemoryCache } from "@apollo/client";

// context provider 
export const apolloClient = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});
