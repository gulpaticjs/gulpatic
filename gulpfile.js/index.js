// Include gulp & tools we'll use
gulp = require('gulp');
$ = require('gulp-load-plugins')();
runSequence = require('run-sequence');
browserSync = require('browser-sync');
reload = browserSync.reload;

// // Require all tasks in _gulp/tasks, including subfolders
var requireDir = require('require-dir');
requireDir('./_gulp/tasks', {
	recurse: true
});
