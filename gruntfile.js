// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

     // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'src/**/*.js']
    },

    // configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'public/dist/js/main.min.js': 'src/js/main.js',
          
        }
      }
    },

       less: {
      build: {
        files: {
          'public/dist/css/pretty.css': 'src/css/pretty.less'
        }
      }
    },

    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'public/dist/css/style.min.css': 'src/css/style.css',
          'public/dist/css/style.min.css': 'src/css/settingsCss.css'
        }
      }
    },

    // configure watch to auto update ----------------
watch: {
  
  // for stylesheets, watch css and less files 
  // only run less and cssmin stylesheets: { 
  files:  ['src/**/*.css', 'src/**/*.less'], 
  tasks: ['less', 'cssmin'],

  // for scripts, run jshint and uglify 
  scripts: { 
    files: 'src/**/*.js', tasks: ['jshint', 'uglify'] 
  } 
},

   nodemon: {
      dev: {
        script: './app.js'
      }
    }, // nodemon

    
    concurrent: {
      dev: {
        tasks: ['jshint',  'nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    } // concurrent
    

    // all of our configuration will go here

  });



  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');


    // ============= // CREATE TASKS ========== //
  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less', 'concurrent','nodemon','watch']); 
};