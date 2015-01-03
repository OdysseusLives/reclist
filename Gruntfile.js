module.exports = function (grunt) {

  grunt.initConfig({

    jshint: {
      all: {
        src: 'app/assets/javascripts/**/*.js',
        options: {
          jshintrc: '.jshintrc'
        }
      }
    },

    watch: {
      jshint: {
        files: 'app/assets/javascripts/**/*.js',
        tasks: 'jshint'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

};