/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    test: {
      files: ['test/**/*.js']
    },
    concat: {
      js: {
        src: ['<banner:meta.banner>', 'static/js/*.js'],
        dest: 'dist/static/js/<%= pkg.name %>.js'
      }
    },
    min: {
      src: ['<banner:meta.banner>', 'static/js/*.js'],
      dest: 'dist/static/js/<%= pkg.name %>.js'
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
		sass: {
			dist: {
				files: {
					'static/css/about.css': 'static/scss/about.scss',
					'static/css/screen.css': 'static/scss/screen.scss'
				},
				options: {
					compass: true
				}

			}
		},
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });


	grunt.loadNpmTasks('grunt-contrib-sass');
  // Default task.
  grunt.registerTask('default', 'lint test concat min');
};
