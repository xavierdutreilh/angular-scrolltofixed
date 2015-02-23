'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      dist: {
        src: [
          'dist',
        ],
      },
    },
    bower: {
      install: {
        options: {
          copy: false,
          verbose: true,
        },
      },
    },
    jshint: {
      options: {
        jshintrc: true,
      },
      all: {
        src: [
          'Gruntfile.js',
          'src/**/*.js',
        ],
        nonull: true,
      },
    },
    jscs: {
      all: {
        src: [
          'Gruntfile.js',
          'src/**/*.js',
        ],
        nonull: true,
      },
    },
    concat: {
      dist: {
        src: [
          'src/**/*.js',
        ],
        dest: 'dist/angular-scrolltofixed.js',
        nonull: true,
      },
    },
    uglify: {
      dist: {
        src: [
          'src/**/*.js',
        ],
        dest: 'dist/angular-scrolltofixed.min.js',
        nonull: true,
      },
    },
    bump: {
      options: {
        filepaths: [
          'bower.json',
          'package.json',
        ],
        commitMessage: 'Bump version to {%= version %}',
      },
    },
  });

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.registerTask('prepare', [
    'concat',
    'uglify',
  ]);

  grunt.registerTask('test', [
    'bower',
  ]);

  grunt.registerTask('default', [
    'jshint',
    'jscs',
    'prepare',
    'test',
  ]);
};
