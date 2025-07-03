
// Global type declarations for TypeScript

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Web Vitals types
declare module 'web-vitals' {
  export interface Metric {
    name: string;
    value: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    delta: number;
    entries: PerformanceEntry[];
    id: string;
    navigationType: string;
  }

  export function getCLS(onReport: (metric: Metric) => void, reportAllChanges?: boolean): void;
  export function getFID(onReport: (metric: Metric) => void): void;
  export function getFCP(onReport: (metric: Metric) => void, reportAllChanges?: boolean): void;
  export function getLCP(onReport: (metric: Metric) => void, reportAllChanges?: boolean): void;
  export function getTTFB(onReport: (metric: Metric) => void): void;
}

export {};
