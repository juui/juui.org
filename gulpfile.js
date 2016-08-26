'use strict';

var gulp = require('gulp');
var hub = require('gulp-hub');

hub(['tasks/*.js']);

gulp.task('default', gulp.series('test'));
