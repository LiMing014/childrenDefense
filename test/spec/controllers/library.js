'use strict';

describe('Controller: LibraryCtrl', function () {

  // load the controller's module
  beforeEach(module('outpathsApp'));

  var LibraryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LibraryCtrl = $controller('LibraryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
