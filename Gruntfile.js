/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    latex: {
      options: {},
      psf: {
        options: {
          outputDirectory: 'dist/pdf'
        },
        src: ['archivos_memoria/latex.tex']
      }
    },
    watch: {
      latex: {
        files: 'archivos_memoria/**/*.tex',
        tasks: ['latex:pdf']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-latex');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['latex']);

};
