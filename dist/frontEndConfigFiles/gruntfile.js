module.exports = function (grunt) {

  // load grunts tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: this.file.readJSON('package.json'),

    info: {
      sourceDir: '.',
      configDir: 'frontEndConfigFiles',
      sharedFolder: 'shared',
      bbv3Components: 'blackberry-v3/components',
      bbv3Sass: 'blackberry-v3/sass',
      bbv3Scripts: 'blackberry-v3/js',
      cylanceComponents: 'cylance/components',
      cylanceSass: 'cylance/sass',
      cylanceScripts: 'cylance/js',
      workingDir: 'workingdir',
      frontendDir: 'frontend',
      compiledCommunitiesDir: '../src/main/content/jcr_root/apps/bbcom-aem-project/clientlibs/clientlib-communities/frontend',
      compiledDirV3: '../src/main/content/jcr_root/apps/blackberry-v3/clientlibs/clientlib-site/frontend',      
      compiledDirCylance: '../src/main/content/jcr_root/apps/cylance/clientlibs/clientlib-site/frontend',
      compiledDeveloperDir: '../src/main/content/jcr_root/apps/bbcom-aem-project/clientlibs/clientlib-developer/frontend',
      compiledSharedDir: '../src/main/content/jcr_root/apps/bbcom-aem-project/clientlibs/clientlib-shared/frontend',
      compiledSiteDir: '../src/main/content/jcr_root/apps/bbcom-aem-project/clientlibs/clientlib-site/frontend',
      compiledBBDir: '../src/main/content/jcr_root/apps/bbcom/clientlibs/clientlib-site/frontend',
      compiledCertDir: '../src/main/content/jcr_root/apps/certicom/clientlibs/clientlib-site/frontend',
      compiledHelpDir: '../src/main/content/jcr_root/apps/docs-bbcom/clientlibs/clientlib-site/frontend',
      compiledHelpRTLDir: '../src/main/content/jcr_root/apps/docs-bbcom/clientlibs/clientlib-site-rtl/frontend',
      compiledBlogsDir: '../src/main/content/jcr_root/apps/blogs-bbcom/clientlibs/clientlib-site/frontend'
    },
    // grunt update - this is only to be run manualy
    devUpdate: {
      check: {
        option: {
          updateType: 'report',
          packages: {
            devDependencies: true, //only check for devDependencies
            dependencies: true
          }
        }
      },
      update: {
        updateType: 'prompt',
        packages: {
          devDependencies: true, //only check for devDependencies
          dependencies: true
        }
      }

    },
    // cssComb    
    csscomb: {
      options: {
        config: '<%= info.configDir %>/.csscomb.json'
      },
      bbv3: {
        expand: true,
        cwd: '<%= info.bbv3Components %>',
        src: ['**/*.scss'],
        dest: '<%= info.bbv3Components %>',
      }
    },
    // build the scss file
    sass: {
      bbv3: {
        options: {
          outputStyle: 'compressed',
          includePaths: [
            '<%= info.sharedFolder%>/bootstrap-4.0.0/scss'
          ]
        },
        files: {
          '<%= info.compiledDirV3 %>/main.css': '<%= info.bbv3Sass %>/main.scss'
        }
      },
      bbv3Dev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          banner: '/* <%= pkg.name %> ' + 'Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */ ',
          includePaths: [
            '<%= info.sharedFolder %>/bootstrap-4.0.0/scss'
          ]
        },
        files: {
          '<%= info.compiledDirV3 %>/main.css': './blackberry-v3/sass/main.scss'
        }
      },
      communities: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          '<%= info.compiledCommunitiesDir %>/main.css': './workingdir/sass/communities.scss'
        }
      },
      communitiesDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>'
        },
        files: {
          '<%= info.compiledCommunitiesDir %>/main.css': './workingdir/sass/communities.scss'
        }
      },
      cylance: {
        options: {
          outputStyle: 'compressed',
          banner: '/* <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */ ',
          includePaths: [
            '<%= info.sharedFolder%>/bootstrap-4.1.3/scss'
          ]
        },
        files: {
          '<%= info.compiledDirCylance %>/main.css': '<%= info.bbv3Sass %>/main.scss'
        }
      },
      cylanceDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          banner: '/* <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */ ',
          includePaths: [
            '<%= info.sharedFolder %>/bootstrap-4.1.3/scss'
          ]
        },
        files: {
          '<%= info.compiledDirCylance %>/main.css': './cylance/sass/main.scss'
        }
      },      
      developers: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          '<%= info.compiledDeveloperDir %>/main.css': './workingdir/sass/developers.scss'
        }
      },
      developersDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>'
        },
        files: {
          '<%= info.compiledDeveloperDir %>/main.css': './workingdir/sass/developers.scss'
        }
      },
      shared: {
        options: {
          outputStyle: 'compressed',
          includePaths: [
            '<%= info.sharedFolder%>/bootstrap-sass/assets/stylesheets',
            '<%= info.sharedFolder%>/animate-sass'
          ]
        },
        files: {
          '<%= info.compiledSharedDir %>/main.css': './workingdir/sass/shared.scss'
        }
      },
      sharedDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>',
          includePaths: [
            '<%= info.sharedFolder%>/animate-sass'
          ]
        },
        files: {
          '<%= info.compiledSharedDir %>/main.css': './workingdir/sass/shared.scss'
        }
      },
      site: {
        options: {
          outputStyle: 'compressed',
          includePaths: [
            '<%= info.sharedFolder%>/animate-sass'
          ]
        },
        files: {
          '<%= info.compiledSiteDir %>/main.css': './workingdir/sass/site.scss'
        }
      },
      siteDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %>',
          includePaths: [
            '<%= info.sharedFolder%>/animate-sass'
          ]
        },
        files: {
          '<%= info.compiledSiteDir %>/main.css': './workingdir/sass/site.scss'
        }
      },
      bb: {
        options: {
          outputStyle: 'compressed',
          includePaths: [
            '<%= info.sharedFolder%>/bootstrap-4.0.0/scss',
            '<%= info.sharedFolder%>/animate-sass/animate.scss'
          ]
        },
        files: {
          '<%= info.compiledBBDir %>/main.css': '<%= info.frontendDir %>/sass/bb.scss'
        }
      },
      bbDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          includePaths: [
            '<%= info.sharedFolder %>/bootstrap-4.0.0/scss'
          ]
        },
        files: {
          '<%= info.compiledBBDir %>/main.css': '<%= info.frontendDir %>/sass/bb.scss'
        }
      },
      blogs: {
        options: {
          outputStyle: 'compressed',
          includePaths: [
            '<%= info.sharedFolder%>/bootstrap-4.0.0/scss'
          ]
        },
        files: {
          '<%= info.compiledBlogsDir %>/main.css': '<%= info.frontendDir %>/sass/blogs.scss'
        }
      },
      blogsDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          includePaths: [
            '<%= info.sharedFolder %>/bootstrap-4.0.0/scss'
          ]
        },
        files: {
          '<%= info.compiledBlogsDir %>/main.css': '<%= info.frontendDir %>/sass/blogs.scss'
        }
      },
      certicom: {
        options: {
          outputStyle: 'compressed',
          includePaths: [
            '<%= info.sharedFolder%>/bootstrap-4.0.0/scss'
          ]
        },
        files: {
          '<%= info.compiledCertDir %>/main.css': '<%= info.frontendDir %>/sass/certicom.scss'
        }
      },
      certicomDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          includePaths: [
            '<%= info.sharedFolder %>/bootstrap-4.0.0/scss'
          ]
        },
        files: {
          '<%= info.compiledCertDir %>/main.css': '<%= info.frontendDir %>/sass/certicom.scss'
        }
      },
      help: {
        options: {
          outputStyle: 'compressed',
          includePaths: [
            '<%= info.sharedFolder%>/bootstrap-4.0.0/scss'
          ]
        },
        files: {
          '<%= info.compiledHelpDir %>/main.css': '<%= info.frontendDir %>/sass/help.scss'
        }
      },
      helpDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          includePaths: [
            '<%= info.sharedFolder %>/bootstrap-4.0.0/scss'
          ]
        },
        files: {
          '<%= info.compiledHelpDir %>/main.css': '<%= info.frontendDir %>/sass/help.scss'
        }
      },
      helpRTL: {
        options: {
          outputStyle: 'compressed',
          includePaths: [
            '<%= info.sharedFolder%>/bootstrap-4.0.0-rtl/scss'
          ]
        },
        files: {
          '<%= info.compiledHelpRTLDir %>/main.css': '<%= info.frontendDir %>/sass/help-rtl.scss'
        }
      },
      helpRTLDev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: true,
          sourceMap: true,
          includePaths: [
            '<%= info.sharedFolder%>/bootstrap-4.0.0-rtl/scss'
          ]
        },
        files: {
          '<%= info.compiledHelpRTLDir %>/main.css': '<%= info.frontendDir %>/sass/help-rtl.scss'
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
        '<%= info.bbv3Components %>/**/*.js',
        '!<%= info.bbv3Components %>/components/successStories/successStories.js',
        '!<%= info.bbv3Components %>/components/resourceCenter/resourceCenter.js',
        '!<%= info.bbv3Components %>/components/qnx/partnetlisting/partnerlisting.js',
        '<%= info.bbv3Scripts %>/global.js',
        // cylance
        '<%= info.cylanceComponents %>/**/*.js',
        '<%= info.cylanceScripts %>/global.js',
        // working dir
        '<%= info.workingDir %>/components/**/*.js',
        '!<%= info.workingDir %>/components/shared/pressRelease/pressReleaseFeatured.js',
        '!<%= info.workingDir %>/components/shared/pressRelease/pressReleaseLanding.js',
        // front end
        '<%= info.frontendDir %>/components/**/*.js',
      ]
    },
    // format js files
    jsbeautifier: {
      options: {
        config: '<%= info.configDir %>/.jsbeautifyrc'
      },
      bbv3: {
        src: [
          '<%= info.bbv3Components %>/**/*.js',
          '<%= info.bbv3Scripts %>/plugins.js',
          '<%= info.bbv3Scripts %>/global.js'
        ]
      },
      cylance: {
        src: [
          '<%= info.cylanceComponents %>/**/*.js',          
          '<%= info.cylanceScripts %>/global.js'
        ]
      },      
      workingDir: {
        src: [
          '<%= info.workingDir %>/components/**/*.js',
          '<%= info.workingDir %>/scripts/global.js'
        ]
      },
      frontendDir: {
        src: [
          '<%= info.frontendDir %>/components/**/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ]
      }

    },
    // combine and minify js files
    uglify: {
      // v3
      bbv3: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: '\n // EOF'
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.sharedFolder%>/underscore/underscore.min.js',
          '<%= info.bbv3Components %>/**/*.js',
          '<%= info.bbv3Scripts %>/plugins.js',
          '<%= info.bbv3Scripts %>/global.js'
        ],
        dest: '<%= info.compiledDirV3 %>/main.js'
      },
      bbv3Dev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.sharedFolder%>/underscore/underscore.min.js',
          '<%= info.bbv3Components %>/**/*.js',
          '<%= info.bbv3Scripts %>/plugins.js',
          '<%= info.bbv3Scripts %>/global.js'
        ],
        dest: '<%= info.compiledDirV3 %>/main.js'
      },
      // Communities
      communities: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Communities Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: '\n // EOF'
        },
        src: [
          '<%= info.workingDir %>/components/communities/**/*.js',
          '<%= info.workingDir %>/scripts/global.js'
        ],
        dest: '<%= info.compiledCommunitiesDir %>/main.js'
      },
      communitiesDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Communities Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.workingDir %>/components/communities/**/*.js',
          '<%= info.workingDir %>/scripts/global.js'
        ],
        dest: '<%= info.compiledCommunitiesDir %>/main.js'
      },
      // Cylance
      cylance: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: '\n // EOF'
        },
        src: [          
          '<%= info.cylanceComponents %>/**/*.js',          
          '<%= info.cylanceScripts %>/global.js'        ],
        dest: '<%= info.compiledDirCylance %>/main.js'
      },
      cylanceDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.cylanceComponents %>/**/*.js',
          '<%= info.cylanceScripts %>/global.js'
        ],
        dest: '<%= info.compiledDirCylance %>/main.js'
      },      
      // Developer                         
      developer: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Developers Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.workingDir %>/components/developers/**/*.js',
          '<%= info.workingDir %>/scripts/global.js'
        ],
        dest: '<%= info.compiledDeveloperDir %>/main.js'
      },
      developerDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Communities Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.workingDir %>/components/developers/**/*.js',
          '<%= info.workingDir %>/scripts/global.js'
        ],
        dest: '<%= info.compiledDeveloperDir %>/main.js'
      },
      // shared
      shared: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Shared Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.workingDir %>/components/shared/**/*.js',
          '<%= info.workingDir %>/scripts/global.js'
        ],
        dest: '<%= info.compiledSharedDir %>/main.js'
      },
      sharedDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Shared Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.workingDir %>/components/shared/**/*.js',
          '<%= info.workingDir %>/scripts/global.js'
        ],
        dest: '<%= info.compiledSharedDir %>/main.js'
      },
      // Site
      site: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Site Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.workingDir %>/components/site/**/*.js',
          '<%= info.workingDir %>/scripts/global.js'
        ],
        dest: '<%= info.compiledSiteDir %>/main.js'
      },
      siteDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Site Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.workingDir %>/components/site/**/*.js',
          '<%= info.workingDir %>/scripts/global.js'
        ],
        dest: '<%= info.compiledSiteDir %>/main.js'
      },
      // BB
      bb: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: '\n // EOF'
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/bb/**/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledBBDir %>/main.js'
      },
      bbDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/bb/**/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledBBDir %>/main.js'
      },
      // Blogs
      blogs: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: '\n // EOF'
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/blogs/**/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledBlogsDir %>/main.js'
      },
      blogsDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/blogs/**/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledBlogsDir %>/main.js'
      },
      // Certicom
      certicom: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: '\n // EOF'
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/certicom/**/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledCertDir %>/main.js'
      },
      certicomDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/certicom/**/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledCertDir %>/main.js'
      },
      // Help
      help: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: '\n // EOF'
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/help/**/*.js',
          '<%= info.frontendDir %>/components/bb/navigation/*.js',
          '<%= info.frontendDir %>/components/bb/headerv1/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledHelpDir %>/main.js'
      },
      helpDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/help/**/*.js',
          '<%= info.frontendDir %>/components/bb/navigation/*.js',
          '<%= info.frontendDir %>/components/bb/headerv1/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledHelpDir %>/main.js'
      },
      // Help RTL
      helpRTL: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            drop_console: true
          },
          comments: 'false',
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Prod Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> ',
          footer: '\n // EOF'
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0-rtl/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/help/**/*.js',
          '<%= info.frontendDir %>/components/bb/navigation/*.js',
          '<%= info.frontendDir %>/components/bb/headerv1/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledHelpRTLDir %>/main.js'
      },
      helpRTLDev: {
        options: {
          mangle: false,
          beautify: true,
          comments: true,
          quoteStyle: 1,
          banner: '// <%= pkg.name %> ' + 'Dev Complied Date: <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> '
        },
        src: [
          '<%= info.sharedFolder%>/bootstrap-4.0.0-rtl/dist/js/bootstrap.bundle.min.js',
          '<%= info.frontendDir %>/components/help/**/*.js',
          '<%= info.frontendDir %>/components/bb/navigation/*.js',
          '<%= info.frontendDir %>/components/bb/headerv1/*.js',
          '<%= info.frontendDir %>/js/global.js'
        ],
        dest: '<%= info.compiledHelpRTLDir %>/main.js'
      },
    },
    watch: {
      bbv3: {
        files: [
          '<%= info.bbv3Components %>/**/*.js',
          '<%= info.bbv3Scripts %>/plugins.js',
          '<%= info.bbv3Scripts %>/global.js',
          '<%= info.bbv3Sass %>/**/*.scss',
          '<%= info.bbv3Components %>/**/*.scss',
        ],
        tasks: ['bbv3Watch']
      },
      cylance: {
        files: [
          '<%= info.cylanceComponents %>/**/*.js',          
          '<%= info.cylanceScripts %>/global.js',
          '<%= info.cylanceSass %>/**/*.scss',
          '<%= info.cylanceComponents %>/**/*.scss',
        ],
        tasks: ['cylanceWatch']
      },      
      frontend: {
        files: [
          '<%= info.frontendDir %>/components/**/*.js',
          '<%= info.frontendDir %>/js/global.js',
          '<%= info.frontendDir %>/components/**/*.scss',
          '<%= info.frontendDir %>/sass/**/*.scss',
        ],
        tasks: ['frontEndWatch']
      },
      workingdir: {
        files: [
          '<%= info.frontendDir %>/components/**/*.js',
          '<%= info.frontendDir %>/js/global.js',
          '<%= info.frontendDir %>/components/**/*.scss',
          '<%= info.frontendDir %>/sass/**/*.scss',
        ],
        tasks: ['workingdirWatch']
      }
    }
  });

  // task to run everything for local dev
  grunt.registerTask('allLocal', [
    'global',
    'sass:bbv3Dev',
    'sass:communitiesDev',
    'sass:developersDev',
    'sass:sharedDev',
    'sass:siteDev',
    'sass:bbDev',
    'sass:blogsDev',
    'sass:certicomDev',
    'sass:helpDev',
    'sass:helpRTLDev',
    'uglify:bbv3Dev',
    'uglify:communitiesDev',
    'uglify:developerDev',
    'uglify:sharedDev',
    'uglify:siteDev',
    'uglify:bbDev',
    'uglify:blogsDev',
    'uglify:certicomDev',
    'uglify:helpDev',
    'uglify:helpRTLDev',
  ]);
  // task for jenkins build
  grunt.registerTask('all', [
    'global',
    'sass:bbv3',
    'sass:communities',
    'sass:developers',
    'sass:shared',
    'sass:site',
    'sass:bb',
    'sass:blogs',
    'sass:certicom',
    'sass:help',
    'sass:helpRTL',
    'uglify:bbv3',
    'uglify:communities',
    'uglify:developer',
    'uglify:shared',
    'uglify:site',
    'uglify:bb',
    'uglify:blogs',
    'uglify:certicom',
    'uglify:help',
    'uglify:helpRTL',
  ]);

  // global items for each run group
  grunt.registerTask('global', [
    
    'jsbeautifier:workingDir',
    'jsbeautifier:frontendDir'
  ]);

  grunt.registerTask('bbv3Watch', [
    'sass:bbv3Dev',
    'jsbeautifier:bbv3',
    'uglify:bbv3Dev',
  ]);
  grunt.registerTask('cylanceWatch', [
    'sass:cylanceDev',
    'jsbeautifier:cylance',
    'uglify:cylanceDev',
  ]);  
  grunt.registerTask('frontEndWatch', [
    'sass:bbDev',
    'sass:blogsDev',
    'sass:certicomDev',
    'sass:helpDev',
    'jsbeautifier:frontendDir',
    'uglify:bbDev',
    'uglify:blogsDev',
    'uglify:certicomDev',
    'uglify:helpDev'
  ]);
  grunt.registerTask('workingdirWatch', [
    'sass:communitiesDev',
    'sass:developersDev',
    'sass:sharedDev',
    'sass:siteDev',
    'jsbeautifier:workingDir',
    'uglify:communitiesDev',
    'uglify:developersDev',
    'uglify:sharedDev',
    'uglify:siteDev'
  ]);


  grunt.registerTask('bbv3Dev', [
    'jsbeautifier:bbv3',
    'sass:bbv3Dev',
    'uglify:bbv3Dev',
    'watch:bbv3'
  ]);

  grunt.registerTask('cylanceDev', [
    'jsbeautifier:cylance',
    'sass:cylanceDev',
    'uglify:cylanceDev',
    'watch:cylance'
  ]);  

  grunt.registerTask('communitiesDev', [
    'global',
    'sass:communitiesDev',
    'sass:sharedDev',
    'uglify:communitesDev',
    'uglify:sharedDev',
    'watch:com'
  ]);

  grunt.registerTask('developerDev', [
    'global',
    'sass:developersDev',
    'uglify:developerDev',
    'watch:workingdir'
  ]);

  grunt.registerTask('siteDev', [
    'global',
    'sass:siteDev',
    'uglify:siteDev',
    'watch:workingdir'
  ]);

  grunt.registerTask('bbDev', [
    'global',
    'sass:bbDev',
    'uglify:bbDev',
    'watch:frontend'
  ]);

  grunt.registerTask('blogsDev', [
    'global',
    'sass:blogsDev',
    'uglify:blogsDev',
    'watch:frontend'
  ]);

  grunt.registerTask('certicomDev', [
    'global',
    'sass:certicomDev',
    'uglify:certicomDev',
    'watch:frontend'
  ]);

  grunt.registerTask('helpDev', [
    'global',
    'sass:helpDev',
    'uglify:helpDev',
    'watch:frontend'
  ]);

  grunt.registerTask('helpRTLDev', [
    'global',
    'sass:helpRTLDev',
    'uglify:helpRTLDev',
    'watch:frontend'
  ]);
};