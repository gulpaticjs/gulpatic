'use strict';

var fs = require('fs');
var _dataPath = _paths.src + '/data.json';


gulp.task('_twig', function () {
	return gulp.src(_paths.src + '/*.twig')
		.pipe($.data(function () {
			return JSON.parse(fs.readFileSync(_dataPath));
		}))
		.pipe($.twig())
		.pipe($.if(_paths.current === _paths.dist, $.htmlmin({collapseWhitespace: true})))
		.pipe(gulp.dest(_paths.current))
		.pipe(reload({stream: true}));
});


// Templates task
gulp.task('templates', function () {
	// Compile Twig files
	runSequence('_twig');

	// Watch Twig files
	gulp.watch(_paths.src + '/**/*.twig', ['_twig']);

	// Watch data.json
	gulp.watch(_dataPath, ['_twig']);
});
