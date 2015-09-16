'use strict';

var _jshintConfig = require('../config/jshint');
var _scriptsFolder = 'scripts';
var _scriptsSrcPath = _paths.src + '/' + _scriptsFolder;
var _libsFilter = $.filter(['*', '!' + _scriptsSrcPath + '/libs/*.js']);

gulp.task('_scripts', function () {
	var _scriptsDistPath = _paths.current + '/' + _scriptsFolder;

	return gulp.src(_scriptsSrcPath + '/**/*.js')

		.pipe($.plumber({
			errorHandler: $.notify.onError({
				title: "Scripts task failed",
				message: "<%= error.message %>"
			})
		}))

		.pipe(_libsFilter)
		.pipe($.jshint(_jshintConfig))
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.jshint.reporter('fail'))
		.pipe(_libsFilter.restore())

		.pipe($.if(_paths.current === _paths.dist, $.uglify()))

		.pipe(gulp.dest(_scriptsDistPath))

		.pipe(reload({stream: true}));
});


// Scripts task
gulp.task('scripts', function (callback) {
	runSequence('_scripts', callback);

	// Watch all js files in scripts folder
	gulp.watch(_scriptsSrcPath + '/**/*.js', ['_scripts']);
});
