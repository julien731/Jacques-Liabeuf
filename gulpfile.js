var gulp = require('gulp'),
    path = require('path'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('sass', function () {
    return gulp.src('./themes/helios/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./themes/helios/static/css'));
});

gulp.task('minify-css', function () {
    return gulp.src('./themes/helios/static/css/main.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./themes/helios/static/css/'));
});

gulp.task('css', ['sass', 'minify-css']);