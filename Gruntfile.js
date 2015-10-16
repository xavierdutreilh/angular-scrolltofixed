'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    'clean': {
      'dist': {
        'src': [
          'dist',
        ],
      },
    },
    'bower': {
      'install': {
        'options': {
          'copy': false,
          'verbose': true,
        },
      },
    },
    'jshint': {
      'options': {
        'jshintrc': true,
      },
      'all': {
        'src': [
          'Gruntfile.js',
          'karma.conf.js',
          'src/**/*.js',
        ],
        'nonull': true,
      },
      'test': {
        'options': {
          'jshintrc': 'test/.jshintrc',
        },
        'src': [
          'test/**/*.js',
        ],
        'nonull': true,
      },
    },
    'jscs': {
      'all': {
        'src': [
          'Gruntfile.js',
          'karma.conf.js',
          'src/**/*.js',
          'test/**/*.js',
        ],
        'nonull': true,
      },
    },
    'karma': {
      'unit': {
        'configFile': 'karma.conf.js',
      },
    },
    'concat': {
      'dist': {
        'src': [
          'src/**/*.js',
        ],
        'dest': 'dist/angular-scrolltofixed.js',
        'nonull': true,
      },
    },
    'uglify': {
      'dist': {
        'src': [
          'src/**/*.js',
        ],
        'dest': 'dist/angular-scrolltofixed.min.js',
        'nonull': true,
      },
    },
    'bump': {
      'options': {
        'filepaths': [
          'bower.json',
          'package.json',
        ],
        'commitMessage': 'Bump version to {%= version %}',
      },
    },
  });

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.registerTask('validate', [
    'jshint',
    'jscs',
  ]);

  grunt.registerTask('test', [
    'bower',
    'validate',
    'karma',
  ]);

  grunt.registerTask('build', [
    'concat',
    'uglify',
  ]);

  grunt.registerTask('default', [
    'test',
    'build',
  ]);
};
