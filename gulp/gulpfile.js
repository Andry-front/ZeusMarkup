const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const rename = require("gulp-rename");

gulp.task('sass', function () {
    return gulp.src('../docs/styles/scss/**/*.scss')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(rename({
                suffix: ".min",
                extname: ".css"
        }))
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('../docs/styles/css'));
});

gulp.task('watch', function () {
    gulp.watch('../docs/styles/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));