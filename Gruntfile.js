/*global module:false*/
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    consts: {
      out: 'out/',
      styles: 'styles/'
    },

    // Task configuration.
    sass: {
      dist: {
        options: {
        },
        files: {
          '<%= consts.out %>main.css': '<%= consts.styles %>main.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= consts.out %>',
            src: '{,*/}*.css',
            dest: '<%= consts.out %>'
          }
        ]
      }
    },
    csslint: {
      strict: {
        options: {
          'box-sizing': 0,
          'compatible-vendor-prefixes': 0,
          'errors': 0,
          'ids': 0,
          'import': 2,
          'important': 1,
          'qualified-headings': 0,
          'unique-headings': 0,
          'universal-selector': 0,
          'zero-units': 0
        },
        src: [
          '<%= consts.out %>*.css'
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task.
  grunt.registerTask('default', ['sass', 'autoprefixer', 'csslint']);
};
