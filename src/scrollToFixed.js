(function(angular) {
  'use strict';

  function scrollToFixed() {
    return {
      require: '?ngModel',
      restrict: 'A',
      link: function link(scope, element, attrs) {
        element.scrollToFixed(scope.$eval(attrs.scrollToFixed));

        if (attrs.ngModel) {
          scope.$watch(attrs.ngModel, function watchNgModel() {
            element.trigger('resize');
          }, true);
        }

        element.bind('update', function update() {
          element.trigger('resize');
        });

        element.bind('$destroy', function destroy() {
          element.trigger('detach.ScrollToFixed');
        });
      }
    };
  }

  angular
    .module('scrollToFixed', [])
    .directive('scrollToFixed', scrollToFixed);
})(window.angular);
