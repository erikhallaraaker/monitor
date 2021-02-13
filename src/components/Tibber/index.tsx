import { FC } from "react";
import { ApolloProvider } from "@apollo/client";

import tibberClient from "./tibber-client";
import User from "./User";

const Tibber: FC = () => (
    <ApolloProvider client={tibberClient}>
        <User />
    </ApolloProvider>
);

export default Tibber;
