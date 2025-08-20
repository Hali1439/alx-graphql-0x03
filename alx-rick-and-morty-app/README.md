Rick and Morty App – Error Handling & Monitoring

This project is part of the ALX GraphQL projects. It extends the Rick and Morty app to introduce error handling and monitoring using an Error Boundary component and external logging (Sentry).

📂 Repository Details

GitHub Repository: alx-graphql-0x03

Directory: alx-rick-and-morty-app

Key Files:

components/ErrorBoundary.tsx

pages/_app.tsx

components/ErrorProneComponent.tsx

package.json

README.md

📝 Tasks Completed
0. Create the ErrorBoundary Component

Objective: Implement an ErrorBoundary class component in TypeScript that can catch and handle JavaScript errors in the app.

Added components/ErrorBoundary.tsx with the following functionality:

Tracks whether an error has occurred using state.hasError.

Uses getDerivedStateFromError to update state when an error is caught.

Implements componentDidCatch to log errors to the console.

Renders a fallback UI with a retry button when errors occur.

✅ Verified by running npm run dev and testing at http://localhost:3000.

1. Wrap the Application with ErrorBoundary

Objective: Ensure the entire app is protected by the ErrorBoundary.

Updated pages/_app.tsx:

Imported ErrorBoundary.

Wrapped <Component {...pageProps} /> with <ErrorBoundary>.

This ensures that any unhandled error in child components is caught at the top level.

✅ Verified by starting the app and observing fallback UI on simulated errors.

2. Create a Component to Test ErrorBoundary

Objective: Build a component that intentionally throws an error to confirm the ErrorBoundary works.

Added components/ErrorProneComponent.tsx:

const ErrorProneComponent: React.FC = () => {
  throw new Error('This is a test error!');
};
export default ErrorProneComponent;


Imported and rendered inside pages/index.tsx within an <ErrorBoundary>.

Confirmed that the fallback UI was displayed instead of a crash.

✅ Verified with local testing in the browser.

3. Monitor and Log Errors

Objective: Integrate an external error monitoring service (Sentry).

Installed Sentry:

npm install @sentry/react @sentry/nextjs


Updated ErrorBoundary.tsx:

import * as Sentry from '@sentry/react';
componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  Sentry.captureException(error, { extra: errorInfo });
}


Confirmed that errors from ErrorProneComponent are logged in Sentry dashboard.

✅ Verified by throwing test errors and checking logs in Sentry.

4. Manual Review

Prepared repo with all required changes:

ErrorBoundary.tsx implemented.

_app.tsx updated to wrap app.

ErrorProneComponent.tsx added for testing.

Sentry integration configured.

Repository ready for review.

🚀 Running Locally
# Clone the repo
git clone https://github.com/<your-username>/alx-graphql-0x03.git
cd alx-graphql-0x03/alx-rick-and-morty-app

# Install dependencies
npm install

# Run dev server
npm run dev

# Visit the app
http://localhost:3000

✅ Key Learnings

How to implement React Error Boundaries in TypeScript.

How to wrap an entire Next.js app with an error handler.

How to test error boundaries with components that throw errors.

How to integrate Sentry monitoring to capture runtime errors in production.