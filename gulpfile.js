const gulp = require("gulp");
const sass = require("gulp-sass");
// const uglify = require("gulp-uglify");
const minifycss = require("gulp-minify-css");

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
    gulp.watch(".js",async()=>{
        gulp.src("*.js")
        // .pipe(js())
        .pipe(gulp.dest('d:\\phpStudy\\WWW\\lqgw\\js'))
    })
   
    //压缩css
    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(minifycss())
        .pipe(gulp.dest("d:\\phpstudy\\WWW\\lqgw\\css"));
    });
})