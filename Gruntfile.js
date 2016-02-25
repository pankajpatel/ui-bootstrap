module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    copy: {
      main:{
        files: [
          { //index:
            expand: true,
            cwd: '.',
            src: 'index.html',
            dest: 'public/',
            flatten: true,
            filter: 'isFile',
          },
          { //css and js libs:
            expand: true,
            cwd: 'js',
            src: '*.js',
            dest: 'public/js',
            flatten: true,
            filter: 'isFile',
          },
          { //partials:
            expand: true,
            cwd: 'js/partials',
            src: '*.html',
            dest: 'public/js/partials',
            flatten: true,
            filter: 'isFile',
          },
          { //images:
            expand: true,
            cwd: 'img',
            src: '*.*',
            dest: 'public/img',
            flatten: true,
            filter: 'isFile',
          },
          { //data:
            expand: true,
            cwd: 'data',
            src: '*.*',
            dest: 'public/data',
            flatten: true,
            filter: 'isFile',
          }
        ]
      }

    },
    
    watch: {
      styles: {
        files: ['src/**/*.*'], // which files to watch
        tasks: ['less', 'copy:main', 'concat:dist', 'concat:libJs', 'concat:js', 'uglify', 'copy:app'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['copy:main']);
  grunt.registerTask('with-watch', ['copy:main', 'watch']);
};
