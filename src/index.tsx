import React, { FC } from "react";
import { render } from "react-dom";

const App: FC = () => (
    <h1>Yo!</h1>
);

console.log(process.env.TIBBER_API);

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector("#root")
);

if (module.hot) {
    module.hot.accept();
}
