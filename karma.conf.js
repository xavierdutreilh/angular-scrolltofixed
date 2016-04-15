'use strict';

function karmaConf(config) {
  config.set({
    'basePath': '',
    'frameworks': [
      'jasmine',
    ],
    'files': [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/ScrollToFixed/jquery-scrolltofixed.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/*.js',
      'test/**/*_test.js',
    ],
    'exclude': [],
    'preprocessors': {},
    'reporters': [
      'progress',
    ],
    'port': 9876,
    'colors': true,
    'logLevel': config.LOG_INFO,
    'autoWatch': false,
    'browsers': [
      'PhantomJS',
    ],
    'singleRun': true,
  });
}

module.exports = karmaConf;
