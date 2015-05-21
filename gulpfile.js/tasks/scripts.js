'use strict';

var _jshintConfig = require('../config/jshint');
var _scriptsFolder = 'scripts';
var _scriptsSrcPath = _paths.src + '/' + _scriptsFolder;

gulp.task('_scripts', function () {
	var _scriptsDistPath = _paths.tmp + '/' + _scriptsFolder;

	return gulp.src([
		_scriptsSrcPath + '/**/*.js',
		'!' + _scriptsSrcPath + '/libs/*.js'
	])
		.pipe($.plumber({
			errorHandler: $.notify.onError({
				title: "Scripts task failed",
				message: "<%= error.message %>"
			})
		}))

		.pipe($.jshint(_jshintConfig))
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.jshint.reporter('fail'))

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
