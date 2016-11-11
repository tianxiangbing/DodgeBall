let gulp = require('gulp');
let iwatch = require('gulp-watch');
let ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
gulp.task('ts',function(){
    var tsResult = gulp.src('ts/*.ts')
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(ts({
            // ...
        }));

    return tsResult.js
       // .pipe( ... ) // You can use other plugins that also support gulp-sourcemaps
        .pipe(sourcemaps.write('./')) // Now the sourcemaps are added to the .js file
        .pipe(gulp.dest('js'));
});
gulp.task('watch',function(){
    iwatch(['ts/*.ts'],function(){
        gulp.start('ts')
    });
});
gulp.task('default', ['ts']);