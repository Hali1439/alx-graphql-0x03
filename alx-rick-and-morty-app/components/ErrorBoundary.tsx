import React, { Component, ReactNode } from "react";
import * as Sentry from "@sentry/react";

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Send error + stack trace to Sentry
    Sentry.captureException(error, { 
      extra: { 
        componentStack: errorInfo.componentStack,
        errorBoundary: true
      } 
    });
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center">
          <h2 className="text-red-600 font-bold text-lg">
            Oops, there is an error!
          </h2>
          <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
