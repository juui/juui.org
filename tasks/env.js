'use strict';

var gulp = require('gulp');

function test(done) {
  console.log('Testing');
  done();
}

gulp.task('test', test);

module.exports = gulp;
