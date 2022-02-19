module.exports = function (grunt) {

  // Настройка проекта
  grunt.initConfig({
    terser: {
      options: {},
      example: {
        files: [
          { src: 'src/plugin.js', dest: 'src/plugin.min.js' },
        ]
      }
    }
  });

  // Загрузка плагина, который обеспечивает выполнение команды сжатия
  grunt.loadNpmTasks('grunt-terser');

  // Задача(и), запускаемые по умолчанию
  grunt.registerTask('default', ['terser']);
};