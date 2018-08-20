import { ScriptLoader } from "./ScriptLoader";
import { AppConfig } from "./AppConfig";

/* @ngInject */
export class DataLayerService {
    constructor(private $window: angular.IWindowService, appConfig: AppConfig, scriptLoader: ScriptLoader) {
        $window.dataLayer = $window.dataLayer || [];
        $window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        scriptLoader.load(`https://www.googletagmanager.com/gtm.js?${appConfig.gtmSource}`);
    }

    push(event: DataLayerEvent) {
        this.$window.dataLayer.push(event);
    }
}

interface DataLayerEvent {
    event: DataLayerEventName;
    [key: string]: any;
}

type DataLayerEventName = 'gtm.js' | 'ViewLandingPage';