(function() {
  'use strict';

  angular
      .module('ctrlNewnodb')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'number': '5',
        'title': '',
        'description': 'HTML enhanced for web apps!',
        'picture': 'angular.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
