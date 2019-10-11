const gulp = require("gulp");



gulp.task('copyallfile',async ()=>{
	gulp.src('./**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\lqgw'));
});



//监听
gulp.task("watchall",async ()=>{
    //监听html，
    gulp.watch("*.html",async ()=>{
        //把当前目录下的所有html文件拷贝至目录：dist
        gulp.src("*.html")
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\lqgw'));
    });
    // gulp.watch("*.html",async ()=>{
    //     //把当前目录下的所有html文件拷贝至目录：dist
    //     gulp.src("*.html")
    //     .pipe(gulp.dest('D:\\phpStudy\\WWW\\lqgw'));
    // });

})