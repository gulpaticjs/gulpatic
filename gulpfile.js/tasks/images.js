'use strict';

var pngquant = require('imagemin-pngquant');
var _imagesFolder = 'images';
var _imagesSrcPath = _paths.src + '/' + _imagesFolder;
var _imageminOptions = {
	progressive: true,
	svgoPlugins: [{removeViewBox: false}],
	use: [pngquant()]
};

gulp.task('_images', function () {
	var _imagesDistPath = _paths.current + '/' + _imagesFolder;

	return gulp.src(_imagesSrcPath + '/**/*')
		.pipe($.if(_paths.current === _paths.dist, $.imagemin(_imageminOptions)))

		.pipe(gulp.dest(_imagesDistPath))
		.pipe(reload({stream: true}));

});

// Images task
gulp.task('images', function (callback) {
	runSequence('_images', callback);

	// Watch image files
	gulp.watch(_imagesSrcPath + '/**/*', ['_images']);
});
