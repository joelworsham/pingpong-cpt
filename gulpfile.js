var gulp = require('gulp');
var package = require('./package.json');
var $ = require('gulp-load-plugins')();

//gulp.task('sass_admin', function () {
//    return gulp.src('./assets/src/scss/admin/admin.scss')
//        .pipe($.rename('ld-gb-admin.min.css'))
//        .pipe($.sourcemaps.init())
//        .pipe($.sass()
//            .on('error', $.sass.logError))
//        .pipe($.sourcemaps.init())
//        .pipe($.autoprefixer({
//            browsers: ['last 2 versions', 'ie >= 9']
//        }))
//        .pipe($.sass({outputStyle: 'compressed'}))
//        .pipe($.sourcemaps.write())
//        .pipe(gulp.dest('./assets/dist/css/'))
//        .pipe($.notify({message: 'SASS Admin complete'}));
//});

gulp.task('scripts_admin', function () {
    return gulp.src('./assets/src/js/admin/*.js')
        .pipe($.concat('ld-gb-admin.min.js'))
        .pipe(gulp.dest('./assets/dist/js/'))
        .pipe($.sourcemaps.init())
        .pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('./assets/dist/js/'))
        .pipe($.notify({message: 'JS Admin complete'}));
});

gulp.task('default', ['scripts_admin'], function () {
    gulp.watch(['./assets/src/js/admin/*.js'], ['scripts_admin']);
});