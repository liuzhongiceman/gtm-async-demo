import * as angular from 'angular';
import { DataLayerService } from './services/DataLayerService';
import { ScriptLoader } from './services/ScriptLoader';
import { landingPageComponent } from './components/LandingPage';

angular.module('myApp', ['myApp.config'])
    .service('dataLayer', DataLayerService)
    .service('scriptLoader', ScriptLoader)
    .component('landingPage', landingPageComponent);