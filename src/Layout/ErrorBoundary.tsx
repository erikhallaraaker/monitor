import { Component, ErrorInfo, ReactNode } from "react";
import { Result, Collapse } from "antd";

import "./ErrorBoundary.css";

const { Panel } = Collapse;

interface State {
    error: Error | null;
}

export default class ErrorBoundary extends Component {
    public state: State = { error: null };

    componentDidCatch = (error: Error, errorInfo: ErrorInfo): void => {
        this.setState({ error, errorInfo });
    }

    render = (): ReactNode => {
        const { error } = this.state;

        return !error ? this.props.children : (
            <Result
                status="error"
                title={error.name}
                subTitle={error.message}
            >
                <Collapse activeKey="1">
                    <Panel header="Details" key="1" className="error-panel">
                        <pre>
                            {error.stack}
                        </pre>
                    </Panel>
                </Collapse>
            </Result>
        );
    }
}
