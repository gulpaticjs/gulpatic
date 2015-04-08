'use strict';

var del = require('del');
var _paths = require('../config/paths');


// Clean temp folder
gulp.task('clean', function () {
	del.sync(_paths.tmp);
});

// Clean dist folder
gulp.task('clean:dist', function () {
	del.sync(_paths.dist);
});
