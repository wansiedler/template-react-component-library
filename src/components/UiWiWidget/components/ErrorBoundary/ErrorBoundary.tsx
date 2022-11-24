import React, { ErrorInfo, ReactChild, ReactFragment, ReactPortal } from "react";
import { sendEvent } from "~/quizAction";
import { eventTypes } from "~/types";
import { error } from "~/utils";

type ErrorBoundaryProps = {
    children?: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined | any;
    [key: string]: any;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, { e?: Error; errorInfo?: ErrorInfo }> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error };
    }

    componentDidCatch(e, errorInfo) {
        this.setState({
            e,
            errorInfo
        });
        error(e);
        const quiz = this.props;
        sendEvent({
            eventType: eventTypes.FALLBACK,
            quiz,
            valueName: "Error",
            value: `Rendering error: ${e} ${errorInfo}`
        });
        // Sentry.captureException(error);
        // LogRocket.identify(quiz.uid, {
        //       name: "James Morrison",
        //       email: "jamesmorrison@example.com",
        //
        //       // Add your own custom user variables here, ie:
        //       subscriptionType: "pro"
        // });
        // LogRocket.captureException(error);
    }

    render() {
        if (this.state.e) {
            //render fallback UI
            return <>Something went wrong: {JSON.stringify(this.state.e)}</>;
        }
        //when there's not an error, render children untouched
        return this.props.children;
    }
}
