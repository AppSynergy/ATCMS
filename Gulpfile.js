var gulp = require('gulp');
var purify = require('gulp-purifycss');

gulp.task('css', function() {
  return gulp.src('./public/style.css')
    .pipe(purify(['./public/index.html']))
    .pipe(gulp.dest('./dist/'));
});
