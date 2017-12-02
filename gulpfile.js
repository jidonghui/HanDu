var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");


//定义一个任务(复制文件)

//把文件发布到服务器目录下
//拷贝所有的html
gulp.task("copyhtmltoserver",function(){
	gulp.src("*.html").pipe(gulp.dest("D:/phpStudy/WWW/myProject"));
});
//拷贝所有的common
gulp.task("copycommontoserver",function(){
	gulp.src("common/**/*").pipe(gulp.dest("D:/phpStudy/WWW/myProject/common"));
});
//拷贝所有的css
gulp.task("copycsstoserver",function(){
	gulp.src("css/**/*").pipe(gulp.dest("D:/phpStudy/WWW/myProject/css"));
});

//拷贝所有的img
gulp.task("copyimgtoserver",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:/phpStudy/WWW/myProject/img"));
});

//拷贝所有的js
gulp.task("copyjstoserver",function(){
	gulp.src("js/**/*").pipe(gulp.dest("D:/phpStudy/WWW/myProject/js"));
});

//拷贝所有的php
gulp.task("copyphptoserver",function(){
	gulp.src("php/**/*").pipe(gulp.dest("D:/phpStudy/WWW/myProject/php"));
});

//sass编译任务
gulp.task("sasstocss",function(){
	//拿到scss，进行sass()的处理，放到css目录下。
	gulp.src("sass/**/*").pipe(sass({outputStyle:"compact"})).pipe(gulp.dest("css"));
});

//合并两个js文件
/*
gulp.task("concatJS",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))
	.pipe(gulp.dest("dist/js"));
});
*/


//一次性执行多个任务
gulp.task("build",["copyhtmltoserver","copycommontoserver","copycsstoserver","copyimgtoserver","copyjstoserver","copyphptoserver","sasstocss"],function(){
	console.log("执行完所有的命令");
});


//监视任务
gulp.task("watch",function(){
	gulp.watch("*.html",["copyhtmltoserver"]);
	gulp.watch("common/**/*",["copycommontoserver"]);
	gulp.watch("css/**/*",["copycsstoserver"]);
	gulp.watch("img/**/*",["copyimgtoserver"]);
	gulp.watch("js/**/*",["copyjstoserver"]);
	gulp.watch("php/**/*",["copyphptoserver"]);
	gulp.watch("sass/**/*",["sasstocss"]);
});


