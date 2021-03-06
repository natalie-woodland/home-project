export const { GA_TRACKING_ID } = process.env; // This is your GA Tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type Event = {
  action: string;
  category: string | null;
  label: string | null;
  value: number;
};

export const Analytics = {
  // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
  pageview: (url: string) => {
    if (typeof window === "undefined") return;
    if ("gtag" in window) {
      // @ts-expect-error gtag does not have typescript declaration file
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    }
  },
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  event: ({ action, category, label, value }: Event) => {
    if (typeof window === "undefined") return;
    if ("gtag" in window) {
      // @ts-expect-error gtag does not have typescript declaration file
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
      });
    }
  },
};
