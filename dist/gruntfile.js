module.exports = function (grunt) {

  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: this.file.readJSON('package.json'),

    // build the scss file
    sass: {
      dev: {
        options: {
          implementation: sass,
          sourceMap: true,
          includePaths: [
            'bootstrap/scss'
          ]
        },
        files: {
          '../src/css/main.css' : 'scss/main.scss'
        }
      }
    },
    watch:{
      sass:{
        files:[ 'components/**.scss','scss/**.scss' ],
        tasks: ['sass:dev']
      }
    }

  });


  grunt.registerTask('dev',[
    'sass',
    'watch:sass'
  ]);

};