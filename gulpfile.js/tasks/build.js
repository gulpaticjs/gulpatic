'use strict';

var dateFormat = require('dateformat');

gulp.task('zip:dist', function () {
	var _fileName = _package.name + '-' + dateFormat(new Date(), "dd-mm-yy--HH-MM-ss") + '.zip';
	return gulp.src([_paths.dist + '/**/*', '!' + _paths.dist + '/.gitkeep'])
		.pipe($.zip(_fileName))
		.pipe(gulp.dest(_paths.build))
		.pipe($.notify("Build task completed"));
});


// Build task
gulp.task('build', function (callback) {
	// Change current path to dist
	_paths.current = _paths.dist;

	runSequence(
		'clean',
		'copy:bower',
		'_sass',
		'_js',
		'_templates',
		'zip:dist',
		callback
	);
});
