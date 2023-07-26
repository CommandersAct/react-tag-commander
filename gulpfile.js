const { src, dest, series } = require('gulp');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const babelConfig = require('./babel.config.json');

function scripts(cb) {
    src('./lib/*.js')
      .pipe(dest('./dist/'));
    cb();
}

function buildEs5(cb) {
    console.log("building es5 lib");
    // converting to ES5
    src('src/*.js')
      .pipe(babel(babelConfig))
      .pipe(minify({
          ext:{
              min:'.es5.min.js'
          },
          exclude: ['tasks'],
          noSource: true
      }))
      .pipe(concat('index.es5.min.js'))
      .pipe(dest('dist'));
    cb();
}

function buildEs6(cb) {
    console.log("building es6 lib");
    // converting to ES5
    src('src/*.js')
      .pipe(minify({
          ext:{
              min:'.es6.min.js'
          },
          exclude: ['tasks'],
          noSource: true
      }))
      .pipe(concat('index.es6.min.js'))
      .pipe(dest('dist'));
    cb();
}

exports.scripts = scripts;
exports.buildEs5 = buildEs5;
exports.buildEs6 = buildEs6;
exports.default = series(scripts, buildEs5, buildEs6);
