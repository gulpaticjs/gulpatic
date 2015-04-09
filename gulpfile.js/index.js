// Include gulp & tools we'll use
gulp = require('gulp');
$ = require('gulp-load-plugins')();
runSequence = require('run-sequence');
browserSync = require('browser-sync');
reload = browserSync.reload;


// Get configs
_package = require('../package.json');
_paths = require('./config/paths');


// Require all tasks in tasks, including subfolders
var requireDir = require('require-dir');
requireDir('./tasks', {
	recurse: true
});
