/**
 * @name:gulpfile.js
 * @desc:唯医小程序项目构建自动化工程
 * @example:
 *              gulp scss转wxss
 * @depend:
 * @date: 2018/02/10
 * @author: zhangheng
 */

var gulp = require("gulp");
var    sass = require("gulp-sass");
var    autoprefixer = require("gulp-autoprefixer");
var    cleancss = require("gulp-clean-css");
var    concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var     pump = require("pump");
var    htmlreplace = require('gulp-html-replace');
var rename = require('gulp-rename');

/*Gulp-Sass编译自动化工程*/
//Task:watch   监听Sass文件变化并自动编译
//Task:bs         hot-reload监听全项目文件，保存后浏览器自动刷新
gulp.task("watch-weChat", function() {
    gulp.watch("scss/**/*.scss", ['sass-weChat']);
});

gulp.task("sass-weChat", function() {
    return gulp.src("scss/**/*.scss").
    pipe(sass({ style: "expanded" })).
    pipe(cleancss({
        advanced: false,
        compatibility: 'ie8',
        keepBreaks: false,
        keepSpecialComments: '*'
    })).
    pipe(autoprefixer({
        browsers: ['Android >= 3.5', 'last 4 versions', 'ie >= 8', 'ie_mob >= 10', 'ff >= 30', 'chrome >= 34', 'safari >= 6', 'opera >= 12.1', 'ios >= 6', 'bb >= 10'],
        cascode: true
    })).pipe(rename(function(path){
        console.log(path);
            path.extname = ".wxss";
        })).
    pipe(gulp.dest("pages/"));
});

gulp.task('bs', function() {
    var files = ['pages/**/*.html', 'design-html/**/*.html', 'css/**/*','js/**/*'];
    browserSync.init(files, {
        server: {
            baseDir: "/"
        }
    });
});