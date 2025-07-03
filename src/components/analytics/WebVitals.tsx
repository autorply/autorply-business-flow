
import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

const WebVitals = () => {
  useEffect(() => {
    const reportWebVitals = (metric: WebVitalsMetric) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${metric.name}: ${metric.value} (${metric.rating})`);
      }

      // Send to analytics in production
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.rating,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value)
        });
      }
    };

    // Dynamically import web-vitals only if available
    const loadWebVitals = async () => {
      try {
        const webVitals = await import('web-vitals');
        
        if (webVitals.getCLS) webVitals.getCLS(reportWebVitals);
        if (webVitals.getFID) webVitals.getFID(reportWebVitals);
        if (webVitals.getFCP) webVitals.getFCP(reportWebVitals);
        if (webVitals.getLCP) webVitals.getLCP(reportWebVitals);
        if (webVitals.getTTFB) webVitals.getTTFB(reportWebVitals);
      } catch (error) {
        // web-vitals not available, skip
        console.log('Web vitals monitoring not available');
      }
    };

    loadWebVitals();
  }, []);

  return null;
};

export default WebVitals;
