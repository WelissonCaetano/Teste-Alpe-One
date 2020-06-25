var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// Caminho fonte
var js_src = './src/js/*.js';

//caminho dist
var js_dist = './js';
var js_dist_name = 'scripts.js';
// var css_dist_name = 'stilo.scss';

//Minifica Concatena Scripts

gulp.task('scripts', function () {
    return gulp.src(js_src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(js_dist_name))
    .pipe(gulp.dest(js_dist))
});



// gulp.task('watch', function(){
//     gulp.watch(js_dist, gulp.parallel('scripts'));
//     // gulp.watch(js_dist_init, gulp.series(act));
// });