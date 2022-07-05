import 'core-js/es/object';
import 'intersection-observer';

import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import { TrackingData } from './data/trackingData';
import GlobalStyle from './global.style';

const trackingData: TrackingData = require('./data/trackingData').default;

declare global {
    interface Window { iframeResize: () => void; }
}

window.iframeResize = (): void => {
    const height: number = document.querySelector('body')!.getBoundingClientRect().height;
    parent.postMessage("resize::"+height,"*");
}

window.onresize = (): void => {
    window.iframeResize()
}

window.onload = (): void => {
    window.iframeResize()
}

window.onclick = (): void => {
    window.iframeResize();
}



function getIsTouchDevice(): boolean {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       ((navigator as any).msMaxTouchPoints > 0));
  }

  
export const isTouchDevice: boolean = getIsTouchDevice();

const ROOT: HTMLElement | null = document.getElementById('ROOT') as HTMLDivElement;





ReactDOM.render(
    <>
        <GlobalStyle />
        <App trackingData={trackingData}/>
    </>,
    ROOT
);