# angular-scrolltofixed [![Build Status](https://travis-ci.org/xavierdutreilh/angular-scrolltofixed.svg)](https://travis-ci.org/xavierdutreilh/angular-scrolltofixed)

> AngularJS directive for [ScrollToFixed](https://github.com/bigspotteddog/ScrollToFixed)

## Installation

```bash
bower install angular-scrolltofixed
```

## Usage

First, read the documentation of [ScrollToFixed](https://github.com/bigspotteddog/ScrollToFixed).

Then, inject `angular-scrolltofixed` into your application:

```javascript
angular.module('myApp', ['scrollToFixed']);
```

And add the directive `scroll-to-fixed` to any element that you want to fix:

```html
<p scroll-to-fixed>Hello, world!</p>
```

## Attributes

### scroll-to-fixed

`scroll-to-fixed` defines the options to pass to `ScrollToFixed`.

You can specify them via a plain object in your templates:

```html
<p scroll-to-fixed="{ bottom: 0 }">Hello, world!</p>
```

or a scoped object in your controllers:

```javascript
$scope.scrollToFixedOptions = {
  bottom: 0
};
```

```html
<p scroll-to-fixed="scrollToFixedOptions">Hello, world!</p>
 ```

### ng-model

`ng-model` defines the object to watch and triggers a `resize` event on `ScrollToFixed` when this object changes.

## Events

### update

`update` triggers a `resize` event on `ScrollToFixed`.

### $destroy

`$destroy` triggers a `detach.ScrollToFixed` event on `ScrollToFixed`.

## License

`angular-scrolltofixed` is released under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).
