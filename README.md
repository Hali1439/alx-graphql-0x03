# ReactGuard: Mastering Error Handling

## 📌 Project Overview
This project implements an **Error Boundary** component in a **Next.js** application to gracefully handle JavaScript errors during rendering. The solution demonstrates how to catch errors, provide a fallback UI, recover from non-critical failures, and monitor errors using **Sentry**.

## 🎯 Learning Objectives
- Understand how **React Error Boundaries** work.
- Implement a **class component** in TypeScript.
- Handle runtime errors gracefully in a Next.js application.
- Integrate third-party error monitoring services (**Sentry**).
- Test error handling components effectively.

## 🧩 Key Concepts
- **Error Boundaries** – Special components that catch JavaScript errors in their child component tree.
- **Component Lifecycle Methods** – Using `getDerivedStateFromError` and `componentDidCatch` for error handling.
- **Error Monitoring** – Logging and tracking errors with services like **Sentry**.
- **Fallback UI** – Displaying user-friendly messages instead of a blank screen.
- **Error Recovery** – Giving users a "Try again" option after an error.

## 🛠️ Tools and Libraries
- [React](https://reactjs.org/) – UI library  
- [Next.js](https://nextjs.org/) – React framework  
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript  
- [Sentry](https://sentry.io/) – Error monitoring  
- [Node.js & npm](https://nodejs.org/) – Runtime and package manager  

## 🌍 Real-World Use Case
Error boundaries are essential in production applications to:
1. Prevent entire app crashes from single component failures.  
2. Show meaningful error messages instead of blank screens.  
3. Track and monitor errors in production.  
4. Allow users to retry non-critical actions.  
5. Improve app stability and user experience.  

This approach is used by major applications to ensure **reliability and maintainability**.

---

## 🚀 Implementation Steps

### 0. Create the ErrorBoundary Component
- **File:** `components/ErrorBoundary.tsx`
- Implements a class component with `getDerivedStateFromError` and `componentDidCatch`.
- Displays a fallback UI with a "Try again" button.

```tsx
import React, { ReactNode } from 'react';

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
