import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://a076cd87568f427a9aa6930351f08d55@o1059719.ingest.sentry.io/6048562",
        integrations: [new Integrations.BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 0,
    });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log,
};
