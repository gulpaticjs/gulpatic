'use strict';

var del = require('del');

// Clean all paths
gulp.task('clean', function () {
	del.sync([
		_paths.tmp + '/*', '!' + _paths.tmp + '/.gitkeep',
		_paths.dist + '/*', '!' + _paths.dist + '/.gitkeep'
	]);
});
