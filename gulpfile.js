'use strict';

var gulp = require('gulp');
var hub = require('gulp-hub');

hub(['tasks/*.js']);

gulp.task('compileServer', gulp.series('cleanDist', 'compileServer'));

gulp.task('default', gulp.series('test'));
