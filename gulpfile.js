'use es6';

const gulp = require('gulp');
const GulpLiveServer = require('gulp-live-server');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');

gulp.task('live-server', () => {
  const server = new GulpLiveServer('server/main.js');
  server.start();
});

gulp.task('bundle', () => {
  return browserify({
    entries: 'app/main.jsx',
    debug: true
  })
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./.tmp'));
});

gulp.task('serve', ['bundle', 'live-server'], () => {
  browserSync.init(
    null, {
      proxy: 'http://localhost:7777',
      port: 9001
    }
  );
});
