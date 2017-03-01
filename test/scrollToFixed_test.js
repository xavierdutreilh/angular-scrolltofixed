/* eslint-env jasmine */
/* global angular:false inject:false */

describe('scrollToFixed', function () {
  var $scope
  var element

  beforeEach(module('scrollToFixed'))

  beforeEach(inject(function ($injector) {
    var $rootScope = $injector.get('$rootScope')
    $scope = $rootScope.$new()
    $scope.name = 'Alan'
  }))

  describe('functions', function () {
    describe('link', function () {
      var scrollToFixed

      beforeEach(function () {
        scrollToFixed = spyOn(angular.element.fn, 'scrollToFixed')
      })

      describe('when there are options', function () {
        beforeEach(inject(function ($injector) {
          var $compile = $injector.get('$compile')
          var template =
            '<div scroll-to-fixed="{\'bottom\': 0}">' +
              'Hello, world!' +
            '</div>'
          element = $compile(template)($scope)
        }))

        it('should call angular.element.fn.scrollToFixed', function () {
          expect(scrollToFixed).toHaveBeenCalledWith({'bottom': 0})
        })
      })

      describe('when there are no options', function () {
        beforeEach(inject(function ($injector) {
          var $compile = $injector.get('$compile')
          var template = '<div scroll-to-fixed>Hello, world!</div>'
          element = $compile(template)($scope)
        }))

        it('should call angular.element.fn.scrollToFixed', function () {
          expect(scrollToFixed).toHaveBeenCalledWith(undefined)
        })
      })
    })
  })

  describe('watchers', function () {
    describe('ngModel', function () {
      beforeEach(inject(function ($injector) {
        var $compile = $injector.get('$compile')
        var template =
          '<div scroll-to-fixed ng-model="name">' +
            'Hello, {{ name }}!' +
          '</div>'
        element = $compile(template)($scope)
      }))

      it('should trigger resize', function (done) {
        element.bind('resize', function () {
          done()
        })

        $scope.name = 'Ada'
        $scope.$digest()
      })
    })
  })

  describe('events', function () {
    beforeEach(inject(function ($injector) {
      var $compile = $injector.get('$compile')
      element = $compile('<div scroll-to-fixed>Hello, world!</div>')($scope)
    }))

    describe('update', function () {
      it('should trigger resize', function (done) {
        element.bind('resize', function () {
          done()
        })

        element.trigger('update')
      })
    })

    describe('$destroy', function () {
      it('should trigger detach.ScrollToFixed', function (done) {
        element.bind('detach.ScrollToFixed', function () {
          done()
        })

        element.trigger('$destroy')
      })
    })
  })
})
