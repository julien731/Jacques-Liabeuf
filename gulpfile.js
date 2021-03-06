var gulp = require('gulp'),
    path = require('path'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    surge = require('gulp-surge'),
    concat = require('gulp-concat-util'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename");

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('css', function () {
    return gulp.src('./themes/helios/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./themes/helios/static/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./themes/helios/static/css'));
});

gulp.task('js', function () {
    gulp.src(
        [
            './themes/helios/static/js/jquery.dropotron.min.js',
            './themes/helios/static/js/jquery.scrolly.min.js',
            './themes/helios/static/js/jquery.onvisible.min.js',
            './themes/helios/static/js/skel.min.js',
            './themes/helios/static/js/util.js',
            './themes/helios/static/js/main.js'
        ])
        .pipe(concat('dist.js'))
        .pipe(concat.header('// file: <%= file.path %>\n'))
        .pipe(concat.footer('\n// end\n'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./themes/helios/static/js'));
});

gulp.task('deploy', [], function () {
    return surge({
        project: './public',         // Path to your static build directory
        domain: 'https://jacquesliabeuf.com'  // Your domain or Surge subdomain
    })
});

gulp.task('assets', ['css', 'js']);