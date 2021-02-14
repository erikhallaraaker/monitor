import { FC } from "react";

import "antd/dist/antd.css";

import Layout from "./Layout";
import Tibber from "./components/Tibber";

const App: FC = () => (
    <Layout>
        <Tibber />
    </Layout>
);

export default App;
