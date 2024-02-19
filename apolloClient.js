import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'YOUR_GRAPHQL_ENDPOINT_HERE', // Replace with your GraphQL endpoint
    }),
    cache: new InMemoryCache(),
  });
}
