'use strict';

var pngquant = require('imagemin-pngquant');

var _imagesFolder = 'images';
var _svgSpriteFolder = 'svg-sprite';
var _imagesSrcPath = _paths.src + '/' + _imagesFolder;
var _imageMinConfig = {
	progressive: true,
	svgoPlugins: [{removeViewBox: false}],
	use: [pngquant()]
};


gulp.task('_svg-sprite', function () {
	return gulp.src(_imagesSrcPath + '/' + _svgSpriteFolder + '/*.svg')
		.pipe($.svgSprite({
			mode: {
				css: {
					layout: 'horizontal',
					dest: './styles',
					prefix: '.svg--%s',
					dimensions: true,
					sprite: '../images/svg-sprite.svg',
					bust: false,
					render: {
						scss: {
							dest: '_svg-sprite.scss'
						}
					}
				}
			}
		}))
		.pipe(gulp.dest(_paths.src));
});

gulp.task('_images', function () {
	var _imagesDistPath = _paths.current + '/' + _imagesFolder;

	return gulp.src([
		_imagesSrcPath + '/**/*',
		'!' + _imagesSrcPath + '/' + _svgSpriteFolder + '/',
		'!' + _imagesSrcPath + '/' + _svgSpriteFolder + '/**'
	])

		.pipe($.if(_paths.current === _paths.dist, $.imagemin(_imageMinConfig)))

		.pipe(gulp.dest(_imagesDistPath))
		.pipe(reload({stream: true}));
});

// Images task
gulp.task('images', function (callback) {
	runSequence(
		'_svg-sprite',
		'_images',
		callback
	);

	// Watch image files
	gulp.watch(_imagesSrcPath + '/**/*', ['_images']);
});
