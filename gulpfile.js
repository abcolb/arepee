var gulp = require('gulp');
var gulpLiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('live-server', function(){
  var server = new gulpLiveServer('server/main.js');
  server.start();
})

gulp.task('serve', ['live-server'], function(){
  browserSync.init(
    null, {
      proxy:'http://localhost:7777',
      port: 9001
    }
  )
})
