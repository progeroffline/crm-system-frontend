/// <reference types="react" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'calendar-range': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'calendar-month': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'calendar-date': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

declare module 'react' {
  interface SVGProps<T> {
    slot?: string;
  }
}

export {};
