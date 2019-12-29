module.exports = function (grunt) {

  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: this.file.readJSON('package.json'),
    info:{
      bootstrap: 'bootstrap',
      configDir: 'frontEndConfigFiles',
      components: '../components',
      scss: 'scss',
      src: '../src'
    },
    // build the scss file
    sass: {
      dev: {
        options: {
          implementation: sass,
          sourceMap: true,
          includePaths: [
            '<%= info.bootstrap %>/scss'
          ]
        },
        files: {
          '<%= info.src %>/css/main.css' : '<%= info.scss %>/main.scss'
        }
      }
    },
    // check for js syntax errors
    jshint: {
      options: {
        force: true,
        jshintrc: '<%= info.configDir %>/.jshintrc'
      },
      all: [
        // front end
        '<%= info.components %>/**/*.js',
      ]
    },  
    // watch files
    watch:{
      sass:{
        files:[ '../components/**.scss','scss/**.scss' ],
        tasks: ['sass:dev']
      },
      jshint:{
        files:['<%= info.components %>/**/*.js'],
        taskas: ['jshint']
      }
    }

  });


  grunt.registerTask('dev',[
    'sass',
    'watch:sass'
  ]);

};