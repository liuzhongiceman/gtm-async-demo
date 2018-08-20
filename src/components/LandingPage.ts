import { DataLayerService } from "../services/DataLayerService";

/* @ngInject */
class LandingPageController implements angular.IController {
    constructor(dataLayer: DataLayerService) {
        dataLayer.push({ event: 'ViewLandingPage', firstName: 'Roger' });
    }
}

export const landingPageComponent: angular.IComponentOptions = {
    controller: LandingPageController
}
