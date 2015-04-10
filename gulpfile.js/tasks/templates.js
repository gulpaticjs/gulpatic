'use strict';

var fs = require('fs');
var _tempatesSrcPath = _paths.src + '/templates';
var _dataPath = _tempatesSrcPath + '/data.json';


gulp.task('_twig', function () {
	return gulp.src(_tempatesSrcPath + '/*.twig')

		.pipe($.plumber({
			errorHandler: $.notify.onError({
				title: "Templates task failed",
				message: "<%= error.message %>"
			})
		}))

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
	gulp.watch(_tempatesSrcPath + '/**/*.twig', ['_twig']);

	// Watch data.json
	gulp.watch(_dataPath, ['_twig']);
});
