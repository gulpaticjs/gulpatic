'use strict';

var _paths = require('../config/paths');

var	_connectPort = 8000,
	_syncPort = 3000;


gulp.task('_connect', function () {
	$.connectPhp.server({
		base: _paths.src,
		port: _connectPort,
		keepalive: true
	});
});

gulp.task('_browser-sync', function () {
	browserSync({
		proxy: '127.0.0.1:' + _connectPort,
		port: _syncPort,
		open: true,
		notify: false
	});
});


// Serve task
gulp.task('serve', function () {
	// Start a PHP server with browserSync
	runSequence('_connect', '_browser-sync');

	// Watch PHP files
	gulp.watch(_paths.src + '/**/*.php', reload);
});
