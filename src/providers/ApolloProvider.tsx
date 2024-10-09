import { PropsWithChildren } from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { baseUrl } from "@/constants/urlConfig";

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
});

const Provider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
