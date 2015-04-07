'use strict';

gulp.task('_connect', function () {
	$.connectPhp.server({
		base: 'src',
		port: 8000,
		keepalive: true
	});
});

gulp.task('_browser-sync', function () {
	browserSync({
		proxy: '127.0.0.1:8000',
		port: 3000,
		open: true,
		notify: false
	});
});


// Serve task
gulp.task('serve', function () {
	// Start a PHP server with browserSync
	runSequence('_connect', '_browser-sync');

	// Watch PHP files
	gulp.watch('src/**/*.php', reload);
});
