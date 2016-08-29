'use strict';

const gulp = require('gulp');
const config = require('./config.js');
const babel = require('gulp-babel');
const uglify = require("gulp-uglify");

function compileServer() {
  return gulp.src(config.server.source)
    .pipe(babel(
      {
        presets: [
          'es2015'
        ],
        plugins: ['transform-runtime']
      }
    ))
    .pipe(uglify().on('error', function (error) {
      console.log(error);
    }))
    .pipe(gulp.dest(config.server.dist));
}

gulp.task('compileServer', compileServer);

module.exports = gulp;
