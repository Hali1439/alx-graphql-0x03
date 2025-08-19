import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, // put your DSN here
  tracesSampleRate: 1.0, // adjust for production
});
