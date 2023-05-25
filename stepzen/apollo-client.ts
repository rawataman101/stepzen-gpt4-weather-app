// allows us to make a connection to backend that we uploaded grapghQL
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const getClient = () => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URI,
    cache: new InMemoryCache(),
    headers: {
      Authorization:
        "apikey suratthani::stepzen.io+1000::a7d107357ed117382fcb8bb028df9143d2d3db8f34b61db30fb554959e9188cf",
    },
  });
  return client;
};
