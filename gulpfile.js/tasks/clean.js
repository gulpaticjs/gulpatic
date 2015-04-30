'use strict';

var del = require('del');


// Clean temp folder
gulp.task('clean:tmp', function () {
	del.sync([_paths.tmp + '/*', '!' + _paths.tmp + '/.gitkeep']);
});

// Clean dist folder
gulp.task('clean:dist', function () {
	del.sync([_paths.dist + '/*', '!' + _paths.tmp + '/.gitkeep']);
});

// Clean builds folder
gulp.task('clean:builds', function () {
	del.sync([_paths.builds + '/*', '!' + _paths.tmp + '/.gitkeep']);
});


// Clean temp and dist folder
gulp.task('clean', function (callback) {
	runSequence(
		['clean:tmp', 'clean:dist'],
		callback
	);
});
