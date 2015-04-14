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

		.pipe(gulp.dest(_paths.tmp))
		.pipe($.if(_paths.current === _paths.tmp, reload({stream: true})));
});


gulp.task('_useref', function () {

	if (_paths.current !== _paths.dist) {
		return;
	}
	var _assets = $.useref.assets();

	return gulp.src(_paths.tmp + '/*.html')
		.pipe(_assets)
		.pipe($.debug({title: 'assets'}))
		.pipe($.if('*.css', $.csso()))
		.pipe($.if('*.js', $.uglify()))
		.pipe(_assets.restore())
		.pipe($.useref())

		.pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))

		.pipe(gulp.dest(_paths.dist))

		.pipe(reload({stream: true}));
});

gulp.task('_templates', function (callback) {
	runSequence(
		// Compile Twig files
		'_twig',
		// Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets
		'_useref',
		callback
	);
});


// Templates task
gulp.task('templates', function (callback) {
	runSequence('_templates', callback);

	// Watch Twig files
	gulp.watch(_tempatesSrcPath + '/**/*.twig', ['_templates']);

	// Watch data.json
	gulp.watch(_dataPath, ['_templates']);
});
