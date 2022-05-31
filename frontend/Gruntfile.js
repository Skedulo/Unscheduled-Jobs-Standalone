'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });

  // Configurable paths for the application
  var appConfig = {
    src: 'src',
    sass: 'sass',
    img: 'img',
    dist: 'dist',
    vendor: 'vendor',
    images: 'images',

	  rsb: '../sfdx/force-app/main/default/staticresources/CX-JenkinsCI-Template_Dist'

  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= config.src %>/{,**/}*.js'],
        //tasks: ['newer:jshint:all', 'newer:jscs:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      compass: {
        files: ['<%= config.sass %>/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'postcss:server']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.src %>/{,**/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= config.img %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: false,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('.')
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect.static('.')
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= config.dist %>'
        }
      }
    },

    // Make sure there are no obvious mistakes
    // jshint: {
    //   options: {
    //     jshintrc: '.jshintrc',
    //     reporter: require('jshint-stylish')
    //   },
    //   all: {
    //     src: [
    //       'Gruntfile.js',
    //       '<%= config.src %>/{,*/}*.js'
    //     ]
    //   },
    //   test: {
    //     options: {
    //       jshintrc: 'test/.jshintrc'
    //     },
    //     src: ['test/spec/{,*/}*.js']
    //   }
    // },

    // Make sure code styles are up to par
    // jscs: {
    //   options: {
    //     config: '.jscsrc',
    //     verbose: true
    //   },
    //   all: {
    //     src: [
    //       'Gruntfile.js',
    //       '<%= config.src %>/{,*/}*.js'
    //     ]
    //   },
    //   test: {
    //     src: ['test/spec/{,*/}*.js']
    //   }
    // },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/{,*/}*',
            '!<%= config.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp',
      sandbox: {
        options: {
          force: true
        },
        files: [{
          dot: true,
          src: [
            '<%= config.rsb %>/{,*/}*'
          ]
        }]
      }
    },

    // Add vendor prefixed styles
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: ['last 1 version']})
        ]
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= config.sass %>',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= config.img %>',
        javascriptsDir: '<%= config.src %>',
        fontsDir: '<%= config.sass %>/fonts',
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= config.dist %>/img/generated'
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },

    // Renames files for browser caching purposes
    // filerev: {
    //   dist: {
    //     src: [
    //       '<%= config.dist %>/scripts/{,*/}*.js',
    //       '<%= config.dist %>/styles/{,*/}*.css',
    //       '<%= config.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
    //       '<%= config.dist %>/styles/fonts/*'
    //     ]
    //   }
    // },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: [
      'event-details.html',
      'modal-helper.html'
      ],
      options: {
        dest: '<%= config.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/styles/{,*/}*.css'],
      js: ['<%= config.dist %>/scripts/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= config.dist %>',
          '<%= config.dist %>/images',
          '<%= config.dist %>/styles'
        ],
        patterns: {
          js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/scripts/scripts.js': [
    //         '<%= config.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.img %>',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.img %>',
          src: '{,*/}*.svg',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: ['*.html'],
          dest: '<%= config.dist %>'
        }]
      }
    },

    ngtemplates: {
      ed: { // event details
        options: {
          module: 'app.eventDetails',
          htmlmin: '<%= htmlmin.dist.options %>',
          usemin: 'scripts/event-details.js'
        },
        cwd: '.',
        src: '<%= config.src %>/{app/event-details,shared}/{,*/}*.html',
        dest: '.tmp/ed/templateCache.js'
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    // cdnify: {
    //   dist: {
    //     html: ['<%= config.dist %>/*.html']
    //   }
    // },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.src %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            '*.html',
            'images/{,*/}*.{webp}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= config.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '<%= config.images %>',
          dest: '<%= config.dist %>/images',
          src: '**'
        }/*, {
          expand: true,
          cwd: '<%= config.vendor %>',
          dest: '<%= config.dist %>/vendor',
          src: '**'
        }*/]
      },
      styles: {
        expand: true,
        cwd: '<%= config.sass %>',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      sandbox: {
        expand: true,
        cwd: '<%= config.dist %>',
        dest: '<%= config.rsb %>',
        src: '**'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      //'wiredep',
      'concurrent:server',
      'postcss:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    //'wiredep',
    'concurrent:test',
    'postcss',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    //'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
    //'cdnify',
    'cssmin',
    'uglify',
    //'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    //'newer:jshint',
    //'newer:jscs',
    //'test',
    'build'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'clean:sandbox',
    'copy:sandbox'
    //'deployResourceBundle'
  ]);
};
