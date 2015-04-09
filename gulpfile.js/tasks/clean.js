'use strict';

var del = require('del');

// Clean current path (excepting .gitkeep)
gulp.task('clean', function () {
	del.sync([_paths.current + '/*', '!' + _paths.current + '/.gitkeep']);
});
