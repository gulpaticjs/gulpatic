'use strict';

var _bowerFolder = 'bower_components';

// Copy bower components to temp path
gulp.task('copy:bower', function () {
	return gulp.src(_paths.src + '/' + _bowerFolder + '/**/*')
		.pipe(gulp.dest(_paths.tmp + '/' + _bowerFolder));
});
