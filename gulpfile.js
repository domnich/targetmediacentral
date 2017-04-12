var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var wiredep = require('wiredep');
var sass = require('gulp-sass');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var ngAnnotate = require('gulp-ng-annotate');
var merge2 = require('merge2');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('inject-scripts', ['bower-watch', 'compile-typescript'], function () {
    gulp.src('./app/index.html')
        .pipe(wiredep.stream({
            directory: 'app/bower_components',
            fileTypes: {
                html: {
                    block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endinject\s*-->)/gi
                }
            }
        }))
        .pipe(inject(merge2(
            gulp.src([
                './app/**/*.js',
                '!./app/core/enums.js',
                '!./app/bower_components/**/*.js'
            ]).pipe(angularFilesort()).pipe(angularFilesort())), {relative: true}))
        .pipe(inject(gulp.src(['./app/all.css']), {relative: true}))
        .pipe(gulp.dest('./app'));
});

gulp.task('bower-watch', ['compile-typescript'], function() {
    gulp.watch('bower.json', ['bower']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'inject-scripts'], function() {
    browserSync.init({
        server: "./app",
        ghostMode: false
    });

    gulp.watch("app/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/**/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/all.scss")
        .pipe(sass())
        .pipe(gulp.dest("app"))
        .pipe(browserSync.stream());
});


// Compiles .ts into .js
gulp.task('compile-typescript', ['clean'], function() {
    var tsResult = tsProject.src('app/**/*.ts')
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(ngAnnotate())
        .pipe(gulp.dest('app'));
});


gulp.task('clean', function () {
    return gulp.src(["app/**/*.js",
        "app/**/*.js.map",
        "!app/bower_components/**"], { read: false })
        .pipe(clean());
});




gulp.task('default', ['clean', 'compile-typescript', 'inject-scripts', 'serve']);
