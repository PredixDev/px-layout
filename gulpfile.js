'use strict';
const gulp = require('gulp');
const pkg = require('./package.json');
const $ = require('gulp-load-plugins')();
const gulpSequence = require('gulp-sequence');
const sassdoc = require('sassdoc');
const importOnce = require('node-sass-import-once');

const sassdocOptions = {
  dest: 'docs',
  verbose: true,
  display: {
    access: ['public', 'private'],
    alias: true,
    watermark: true,
  },
  groups: {
    'undefined': 'Ungrouped'
  }
};

const sassOptions = {
  importer: importOnce,
  importOnce: {
    index: true,
    bower: true
  }
};

gulp.task('sassdoc', function() {
  return gulp.src('./sass/px-layout-sketch.scss')
    .pipe(sassdoc(sassdocOptions));
});

gulp.task('clean', function() {
  return gulp.src(['.tmp', 'css'], {
    read: false
  }).pipe($.clean());
});

gulp.task('sass', function() {
  return gulp.src('./sass/px-layout-sketch.scss')
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.size())
    .pipe($.rename(pkg.name + '.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('autoprefixer', function() {
  return gulp.src('css/**/*.css')
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe($.size())
    .pipe(gulp.dest('css'));
});

gulp.task('css', function() {
  return gulp.src('css/**/*.css')
    .pipe($.sourcemaps.init())
    .pipe($.cssmin())
    //.pipe($.concat(pkg.name + '.css'))
    .pipe($.sourcemaps.write('.'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.size())
    .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('autoprefixer:watch', function() {
  gulp.watch('./css/**/*.css', ['autoprefixer']);
});
const path = require('path');
const stylemod = require('gulp-style-modules');

/*
Create style module

Usage

<style include="shared-styles"></style>
*/
gulp.task('poly-styles', function() {
  gulp.src(`./css/${pkg.name}.min.css`)
    .pipe(stylemod({
      // All files will be named 'styles.html'
      filename: 'styles',
      // Use '-css' suffix instead of '-styles' for module ids
      moduleId: function(file) {
        return pkg.name + '-css';
      }
    }))
    .pipe($.rename(`${pkg.name}-styles.html`))
    .pipe($.size())
    .pipe(gulp.dest('.'));
});



var vulcanize = require('gulp-vulcanize');

var VULCANIZE_FILES = [
  './demo/*.html',
  './px-drawer-layout/**',
  './px-header-layout/**',
  './px-layout/**',
  './px-*.html',
  './px-media-query.html'
];

var VULCANIZE_DIR = './bower_components/_' + pkg.name;
var VULCANIZE_FILE = './bower_components/_' + pkg.name + '.html';
var VULCANIZE_CONFIG = {
  abspath: '',
  excludes: [
    '/\W*iron\W*.*/',
    '/iron-resize/',
    '/polymer/'
  ],
  addedImports: [],
  redirects: [],
  inlineCss: true,
  inlineScripts: true
};

// TODO: Clean out temp dir
gulp.task('clean-vulcanize', function() {
  return gulp.src(VULCANIZE_DIR).pipe($.clean());
});

// TODO: Copy files before vulcanize

gulp.task('copy-vulcanize', ['clean-vulcanize'], function() {
  return gulp.src(VULCANIZE_FILES, {
      base: './'
    })
    .pipe($.size())
    .pipe(gulp.dest(VULCANIZE_DIR));
});

gulp.task('vulcanize', ['copy-vulcanize'], function() {
  return gulp.src(VULCANIZE_FILE)
    .pipe(vulcanize(VULCANIZE_CONFIG))
    .pipe($.rename(pkg.name + '.min.html'))
    .pipe($.size())
    .pipe(gulp.dest('.'));
});

var polybuild = require('polybuild');

/**
 * This builds all the demo/element.html file into a min version for loading.
 */
gulp.task('build', ['copy-vulcanize'], function() {
  return gulp.src([
      VULCANIZE_DIR + '/demo/elements.html'
    ])
    .pipe(polybuild())
    .pipe($.size())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['sass:watch', 'autoprefixer:watch']);
gulp.task('default', gulpSequence('clean', 'sass', 'autoprefixer', 'css', 'sassdoc', 'poly-styles',
  'vulcanize'));
