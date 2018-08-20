//////////////////////////////////////////////////////////
// When this app is deployed to an environment, this
// module will actually come from a different repo, but
// for illustrative purposes here...
//////////////////////////////////////////////////////////

angular.module('myApp.config', [])
    .constant('appConfig', {
        gtmSource: 'id=GTM-M7TRF6B',
    });