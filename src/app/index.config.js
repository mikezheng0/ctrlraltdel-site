(function() {
  'use strict';

  angular
    .module('ctrlNewnodb')
    .config(config)
    .config(function($mdIconProvider) {
      $mdIconProvider
        .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
        .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    });
  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
