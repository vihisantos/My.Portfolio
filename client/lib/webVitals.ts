import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

type GTagFn = (
  command: "config" | "event" | "js" | "get",
  targetId: string | Date,
  config?: Record<string, unknown>
) => void;

function sendToAnalytics(metric: { name: string; value: number; rating?: string; delta?: number; id?: string }) {
  const gtag = (window as unknown as { gtag?: GTagFn }).gtag;
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      value: metric.value,
      metric_id: metric.id,
      metric_rating: metric.rating,
      metric_delta: metric.delta,
      non_interaction: true,
    });
  }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onINP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}
