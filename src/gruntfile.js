module.exports = function (grunt) {

  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: this.file.readJSON('package.json'),
    info: {
      bootstrap: 'bootstrap',
      configDir: 'frontEndConfigFiles',
      components: 'components',
      scripts: 'scripts',
      scss: 'scss',
      dist: '../dist'
    },
    // CSS Comb
    csscomb: {
      options: {
        config: '<%= info.configDir %>/.csscomb.json'
      },
      dev: {
        expand: true,
        cwd: '<%= info.components %>',
        src: ['**/*.scss'],
        dest: '<%= info.components %>',
      }
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
          '<%= info.dist %>/css/main.css': '<%= info.scss %>/main.scss'
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
    // format js files
    jsbeautifier: {
      options: {
        config: '<%= info.configDir %>/.jsbeautifyrc'
      },
      dev: {
        src: [
          '<%= info.components %>/**/*.js',
          '<%= info.scripts %>/global.js'
        ]
      }
    },
    // combine and minify js files
    uglify: {
      // v3
      prod: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: false,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + ': Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: '\n // EOF'
        },
        src: [
          '<%= info.bootstrap%>/dist/js/bootstrap.bundle.min.js',
          '<%= info.scripts %>/global.js',
          '<%= info.components %>/**/*.js',
          
        ],
        dest: '<%= info.dist %>/js/main.js'
      },
      dev: {
        options: {
          mangle: false,
          beautify: true,
          comments: 'all',
          sourceMap: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + ': Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: ' // EOF'
        },
        src: [
          '<%= info.bootstrap%>/dist/js/bootstrap.bundle.min.js',
          '<%= info.scripts %>/global.js',
          '<%= info.components %>/**/*.js',
        ],
        dest: '<%= info.dist %>/js/main.js'
      }
    },
    // sass docs
    sassdoc: {
      options:{
        descriptoin: 'Boilerplate Code',
        package: 'package.json'
      },
      default: {
        src: [
          '<%= info.components %>',
          '<%= info.scss %>'
        ]
      }
    },
    // watch files
    watch: {
      options: { nospawn: true },
      cssComb: {
        files: ['<%= info.components %>/**/**.scss', 'scss/**.scss'],
        tasks: ['csscomb:dev']
      },
      sass: {
        files: ['<%= info.components %>/**/**.scss', 'scss/**.scss'],
        tasks: ['sass:dev']
      },
      sassdoc: {
        files: ['<%= info.components %>/**/**.scss', 'scss/**.scss', 'scss/**/**.scss'],
        tasks: ['sassdoc']
      },
      jshint: {
        files: ['<%= info.components %>/**/*.js', '<%= info.scripts %>/global.js'],
        tasks: ['jshint']
      },
      jsbeautifier: {
        files: ['<%= info.components %>/**/*.js', '<%= info.scripts %>/global.js'],
        tasks: ['jsbeautifier']
      },
      uglify: {
        files: ['<%= info.components %>/**/*.js', '<%= info.scripts %>/global.js'],
        tasks: ['uglify:dev']
      }
    }

  });


  grunt.registerTask('dev', [
    'sass',
    'sassdoc',
    'uglify:dev',
    'watch'
  ]);

};