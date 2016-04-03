(function() {
  'use strict';

  angular
    .module('ctrlNewnodb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
