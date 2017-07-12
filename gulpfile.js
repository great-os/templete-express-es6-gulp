const gulp = require('gulp');
const babel = require('gulp-babel');
const util = require('gulp-util');
const browserify = require('browserify');
const exec = require('child_process').exec;

let lastProcess = null;

const paths = {
  scripts: ['src/**/*.js']
};

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['compile']);
});

gulp.task('compile', () => {
  util.log('Recompiling...');
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('lib'));
});

gulp.task('run', () => {
  lastProcess = exec("nodemon lib/app.js");
  lastProcess.stdout.on("data", data => {
    util.log(data);
  });
});

gulp.task('default', ['watch', 'compile', 'run']);