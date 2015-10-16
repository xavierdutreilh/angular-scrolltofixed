'use strict';

describe('scrollToFixed', function() {
  var $scope;
  var element;

  beforeEach(module('scrollToFixed'));

  beforeEach(inject(function($injector) {
    var $compile = $injector.get('$compile');
    var $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();

    spyOn(angular.element.fn, 'scrollToFixed');

    element = $compile('<div scroll-to-fixed>Hello, world!</div>')($scope);

    $scope.$digest();
  }));

  describe('functions', function() {
    describe('link', function() {
      it('should call angular.element.fn.scrollToFixed', function() {
        expect(angular.element.fn.scrollToFixed).toHaveBeenCalled();
      });
    });
  });

  describe('events', function() {
    describe('update', function() {
      it('should trigger resize', function(done) {
        element.bind('resize', function() {
          done();
        });

        element.trigger('update');
      });
    });

    describe('$destroy', function() {
      it('should trigger detach.ScrollToFixed', function(done) {
        element.bind('detach.ScrollToFixed', function() {
          done();
        });

        element.trigger('$destroy');
      });
    });
  });
});
