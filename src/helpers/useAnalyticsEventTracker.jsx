import { gtag, install } from 'ga-gtag';

function trackAnalyticsEvent(action) {
  gtag('event', 'click', { location: action });
}

export default trackAnalyticsEvent;
