import React, { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { Loader } from "./Loader";
const ServerError = React.lazy(() => import("@/pages/ServerError"));

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <Suspense fallback={<Loader />}>
                    <ServerError />
                </Suspense>
            );
        }

        return this.props.children;
    }
}
