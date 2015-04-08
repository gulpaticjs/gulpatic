'use strict';

var _paths = require('../config/paths');

var _syncPort = 3000;


gulp.task('_browser-sync', function () {
	browserSync({
		server: {
			baseDir: './' + _paths.dist
		},
		port: _syncPort,
		open: true,
		notify: false
	});
});


// Serve task
gulp.task('serve', function () {
	// Start a local server with browserSync
	runSequence(
		'templates',
		'_browser-sync'
	);
});
