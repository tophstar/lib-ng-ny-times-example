module.exports = function (grunt) {

  grunt.initConfig({

    jshint: {
      all: ['source/**/*.js'],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    watch: {

    },

    requirejs: {
      build: {
        options: {
          name: "ny-times",
          baseUrl: "./source",
          out: "./build/ny-times.js",
          waitSeconds: 15,
          optimize: "none",
          optimizeCss: false,
          inlineText: false,
          isBuild: true,
          fileExclusionRegExp: /^\.|\.md$/,

          paths: {
            "angular": "empty:"//"../bower_components/angular/angular",
          },

          shim: {
            "angular": {deps: [], exports: "angular"}
          },

          priority: [
            "angular"
          ]
        }
      }
    },

    babel: {
        options: {
            sourceMap: false,
            presets: ['es2015']
        },
        dist: {
            files: {
                'build/ny-times.js': 'build/ny-times.js'
            }
        }
    },

    uglify: {
      options: {
      },
      dist: {
        files: {
          './build/ny-times.min.js': ['./build/ny-times.js']
        }
      }
    },

    less: {
      ny_times: {
        options: {
          cleancss: false
        },
        files: {
          "build/ny_times.css": "less/import.less",
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.registerTask("setup_build", function () {
    if (!grunt.file.exists("./build")) {
      grunt.file.mkdir("./build");
      grunt.log.ok("Added build folder.");
    } else {
      grunt.log.ok("Build file exists.");
    }
  });

    //gitless and modernizr must happen before require.  These both create files used by require.
  grunt.registerTask("default", ["setup_build", "jshint", "requirejs:build",  "babel", "uglify",
      "less:ny_times"]);
};
