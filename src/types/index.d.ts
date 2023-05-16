export {};

declare global {
  declare const window: WindowWithDataLayer;
  // interface window {
  //   gtag: any|[]; // 👈️ turn off type checking
  // }
}


export type WindowWithDataLayer = Window & {
  gtag: Function;
  dataLayer:[]|any;
  ga:any
};

declare const window: WindowWithDataLayer;

type TrackerProps = {
  eventName: string;
};

export const tracker = ({ eventName }: TrackerProps) => {
  window.gtag('event', eventName);
};