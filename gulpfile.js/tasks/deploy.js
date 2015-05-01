'use strict';

var _rsync = require('../config/rsync');
var _rsyncOptions = {
	hostname: _rsync.hostname,
	destination: _rsync.destination,
	username: _rsync.username,
	root: _paths.dist,
	incremental: true,
	progress: true,
	recursive: true,
	clean: true,
	exclude: ['.gitkeep']
};


gulp.task('_deploy', function () {
	return gulp.src(_paths.dist + '/**')
		.pipe($.rsync(_rsyncOptions));
});


gulp.task('deploy', function (callback) {
	if (_rsync.hostname === 'example.com') {
		$.util.log('');
		$.util.log($.util.colors.red("Please update the rsync's configuration in:"));
		$.util.log($.util.colors.red('/gulpfile.js/config/rsync.js'));
		$.util.log('');
		return;
	}

	runSequence(
		'build',
		'_deploy',
		callback);
});
