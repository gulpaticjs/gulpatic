'use strict';

var _syncPort = 3000;

gulp.task('_browser-sync', function () {
	browserSync({
		server: {
			baseDir: _paths.current
		},
		port: _syncPort,
		open: true,
		notify: false,
		logPrefix: _package.name
	});
});

gulp.task('_serve', function () {
	runSequence(
		'clean',
		'styles',
		'scripts',
		'templates',
		'_browser-sync'
	);
});


// Build and serve the output from the temp folder
gulp.task('serve', function () {
	runSequence('_serve');
});

// Build and serve the output from the dist folder
gulp.task('serve:dist', function () {
	// Change current path to dist
	_paths.current = _paths.dist;

	runSequence('_serve');
});
