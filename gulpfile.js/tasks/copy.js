'use strict';

var _bowerFolder = 'bower_components';
var _fontsFolder = 'fonts';

// Copy bower components to temp path
gulp.task('copy:bower', function () {
	return gulp.src(_paths.src + '/' + _bowerFolder + '/**/*')
		.pipe(gulp.dest(_paths.tmp + '/' + _bowerFolder));
});


// Copy fonts to current path
gulp.task('copy:fonts', function () {
	return gulp.src(_paths.src + '/' + _fontsFolder + '/**/*')
		.pipe(gulp.dest(_paths.current + '/' + _fontsFolder));
});
