const gulp = require("gulp");
const sass = require("gulp-sass");
// const uglify = require("gulp-uglify");
const minifycss = require("gulp-minify-css");
// const imagemin = require("gulp-imagemin");

gulp.task('copyallfile',async ()=>{
	gulp.src('./**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\lqgw'));
});
// gulp.task('copy-sass',async ()=>{
// 	gulp.src('*.scss')
// 	.pipe(gulp.dest('D:\\phpStudy\\WWW\\lqgw\\css'));
// });
//监听任务
gulp.task("watchall",async()=>{
    //监听html，进l行复制
    gulp.watch("php/**/*",async()=>{
        gulp.src("php/**/*")
        .pipe(gulp.dest("d:\\phpstudy\\WWW\\lqgw\\php"))
    });
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("d:\\phpstudy\\WWW\\lqgw"))
    });

    //监听sass文件
    gulp.watch("sass/**/*",async()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("d:\\phpstudy\\WWW\\lqgw\\css"))
        .pipe(gulp.dest("css"))
    })
    //监听js
    gulp.watch("js/**/*",async()=>{
        gulp.src("js/**/*")
        .pipe(gulp.dest('d:\\phpStudy\\WWW\\lqgw\\js'))
    })
    gulp.watch("indexImg/**/*",async()=>{
        gulp.src("indexImg/**/*")
        .pipe(gulp.dest('d:\\phpStudy\\WWW\\lqgw\\indexImg'))
    })
    //压缩css
    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(minifycss())
        .pipe(gulp.dest("d:\\phpstudy\\WWW\\lqgw\\css"));
    });
    // gulp.watch("indexImg/**/*",async()=>{
    //     gulp.src("indexImg/**/*")
    //     .pipe(imagemin())
    //     .pipe(gulp.dest("d:\\phpstudy\\WWW\\lqgw\\indexImg"))
    // })
})