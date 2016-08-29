'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')({lazy: true});
const config = require('./config.js');
const util = require('./util.js');

function cleanTemp(done) {
  util.cleanFiles([].concat(
    config.temp
  ));
  done();
}

function cleanDist(done) {
  util.cleanFiles([].concat(
    config.dist
  ));
  done();
}

gulp.task('cleanTemp', cleanTemp);
gulp.task('cleanDist', cleanDist);

module.exports = gulp;
