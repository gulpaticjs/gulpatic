'use strict';

var _stylesFolder = 'styles';
var _stylesSrcPath = _paths.src + '/' + _stylesFolder;

gulp.task('_sass', function () {
	return gulp.src(_stylesSrcPath + '/styles.scss')
		.pipe($.if(_paths.current === _paths.tmp, $.sourcemaps.init()))
		.pipe($.sass())
		.pipe($.if(_paths.current === _paths.tmp, $.sourcemaps.write()))
		.pipe($.if(_paths.current === _paths.dist, $.csso()))
		.pipe(gulp.dest(_paths.current + '/' + _stylesFolder))
		.pipe(reload({stream: true}));
});


// Styles task
gulp.task('styles', function () {
	// Compile Sass files
	runSequence('_sass');

	// Watch Sass files
	gulp.watch(_stylesSrcPath + '/**/*.scss', ['_sass']);
});
