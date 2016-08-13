var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var del = require('del');


function compile(watch) {
    var bundler = watchify(browserify('./src/js/index.js', {debug: true}).transform(babel));

    function rebundle() {
        bundler.bundle()
            .on('error', function (err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/js'));
    }

    if (watch) {
        bundler.on('update', function () {
            console.log('-> bundling...');
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
}

gulp.task('sass', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('clean', function () {
    return del([
        'dist/css/main.css',
        'dist/css/main.css.map'
    ]);
});

gulp.task('build', function () {
    return compile();
});

gulp.task('watch', function () {
    return watch();
});

gulp.task('default', ['sass', 'watch']);