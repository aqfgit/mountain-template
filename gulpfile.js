const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./style/scss/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./bundle'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        },
    });
    gulp.watch('./style/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('.js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;