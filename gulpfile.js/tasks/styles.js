'use strict';

var _stylesFolder = 'styles';
var _stylesSrcPath = _paths.src + '/' + _stylesFolder;
var _autoprefixerConfig = {
	browsers: ['last 3 versions'],
	cascade: false
};


gulp.task('scsslint', function () {
	return gulp.src([
		_stylesSrcPath + '/**/*.scss',
		'!' + _stylesSrcPath + '/plugins/*.scss',
		'!**/_css-sprite.scss',
		'!**/_svg-css-sprite.scss'
	])
		.pipe($.plumber({
			errorHandler: $.notify.onError({
				title: "SCSS Lint task failed",
				message: "<%= error.message %>"
			})
		}))
		.pipe($.cached('scsslint'))
		.pipe($.scssLint({
			config: 'gulpfile.js/config/scsslint.yml'
		}))
		.pipe($.scssLint.failReporter());
});


gulp.task('_styles', ['scsslint'], function () {
	var _stylesDistPath = _paths.current + '/' + _stylesFolder;

	// For best performance, don't add Sass partials to `gulp.src`
	return gulp.src(_stylesSrcPath + '/*.scss')

		.pipe($.plumber({
			errorHandler: $.notify.onError({
				title: "Styles task failed",
				message: "<%= error.message %>"
			})
		}))

		.pipe($.if(_paths.current === _paths.tmp, $.sourcemaps.init()))
		.pipe($.changed(_stylesDistPath, {
			extension: '.css',
			hasChanged: $.changed.compareSha1Digest
		}))
		.pipe($.sass({
			precision: 10
		}))
		.pipe($.if(_paths.current === _paths.tmp, $.sourcemaps.write()))

		.pipe($.sourcemaps.init({loadMaps: true}))
		.pipe($.autoprefixer(_autoprefixerConfig))
		.pipe($.sourcemaps.write())

		.pipe($.if(_paths.current === _paths.dist, $.csso()))

		.pipe(gulp.dest(_stylesDistPath))

		.pipe(reload({stream: true}));
});


// Styles task
gulp.task('styles', function (callback) {
	runSequence('_styles', callback);

	// Watch all sass files in styles folderre
	gulp.watch(_stylesSrcPath + '/**/*.scss', ['_styles']);
});
