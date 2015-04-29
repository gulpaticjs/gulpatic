'use strict';

var dateFormat = require('dateformat');

gulp.task('zip:dist', function () {
	var _fileName = _package.name + '-' + dateFormat(new Date(), "dd-mm-yy--HH-MM-ss") + '.zip';
	return gulp.src([_paths.dist + '/**/*', '!' + _paths.dist + '/.gitkeep'])
		.pipe($.zip(_fileName))
		.pipe(gulp.dest(_paths.builds))
		.pipe($.notify("Compress task completed"));
});


// Compress task
gulp.task('compress', function (callback) {
	runSequence(
		'build',
		'zip:dist',
		callback
	);
});
