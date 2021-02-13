
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "https://api.tibber.com/v1-beta/gql"
});

const authLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        authorization: `Bearer ${process.env.TIBBER_API}`
    }
}));

export default new ApolloClient({
    // eslint-disable-next-line unicorn/prefer-spread
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
