import { Component, ErrorInfo, ReactNode } from "react";

interface IState {
    hasError: boolean;
    error: string | null;
}

export default class ErrorBoundary extends Component {
    public state = { hasError: false, error: null };

    static getDerivedStateFromError = (error: Error): IState => ({ hasError: true, error: error.stack ?? null })

    componentDidCatch = (error: Error, errorInfo: ErrorInfo): void => {
        console.error("Error:", error, errorInfo);
    }

    render = (): ReactNode => !this.state.hasError ? this.props.children : (
        <>
            <h1>Something went wrong.</h1>
            <div>
                <pre>{this.state.error}</pre>
            </div>
        </>
    )
}
