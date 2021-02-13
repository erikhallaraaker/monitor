import { FC } from "react";

import ErrorBoundary from "./ErrorBoundary";

const Layout: FC = ({ children }) => (
    <>
        <header>
            Yo!
        </header>
        <main>
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </main>
    </>
);

export default Layout;
