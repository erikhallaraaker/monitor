import { FC } from "react";
import { ApolloProvider } from "@apollo/client";

import tibberClient from "./tibber-client";
import Layout from "./Layout";
import Tibber from "./components/Tibber";

const App: FC = () => (
    <Layout>
        <ApolloProvider client={tibberClient}>
            <Tibber />
        </ApolloProvider>
    </Layout>
);

export default App;
