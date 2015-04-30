'use strict';

// Build task
gulp.task('build', function (callback) {
	// Change current path to dist
	_paths.current = _paths.dist;

	runSequence(
		'clean',
		'copy:bower',
		'_images',
		'_styles',
		'_scripts',
		'_templates',
		callback
	);
});
