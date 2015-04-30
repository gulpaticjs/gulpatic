'use strict';

var pngquant = require('imagemin-pngquant');

var _imagesFolder = 'images';
var _imagesSrcPath = _paths.src + '/' + _imagesFolder;
var _cssSpritePath = _imagesSrcPath + '/css-sprite';
var _svgCssSpritePath = _imagesSrcPath + '/svg-css-sprite';
var _svgSymbolSpritePath = _imagesSrcPath + '/svg-symbol-sprite';
var _svgoPlugins = [
	{removeViewBox: false},
	{removeTitle: true},
	{removeDesc: true}
];


// Traditional CSS sprites for use as background images
gulp.task('css-sprite', function () {
	return gulp.src(_cssSpritePath + '/*')
		.pipe($.spritesmith({
			padding: 10,
			cssName: '_css-sprite.scss',
			cssVarMap: function (sprite) {
				sprite.name = 'sprite-' + sprite.name;
			},
			imgName: '../images/css-sprite.png',
			retinaSrcFilter: ['**/*-2x.*'],
			retinaImgName: '../images/css-sprite-2x.png'
		}))
		.pipe(gulp.dest(_paths.src + '/styles/'));
});

gulp.task('svg-sprite:css', function () {
	return gulp.src(_svgCssSpritePath + '/*.svg')
		.pipe($.svgSprite({
			mode: {
				css: {
					layout: 'horizontal',
					dest: './styles',
					prefix: '.svg--%s',
					dimensions: true,
					sprite: '../images/svg-css-sprite.svg',
					bust: false,
					render: {
						scss: {
							dest: '_svg-css-sprite.scss'
						}
					}
				}
			}
		}))
		.pipe(gulp.dest(_paths.src));
});

// Inline sprites using the <symbol> element
gulp.task('svg-sprite:symbol', function () {
	return gulp.src(_svgSymbolSpritePath + '/*.svg')
		.pipe($.svgSprite({
			transform: [{
				svgo: {
					plugins: _svgoPlugins
				}
			}],
			mode: {
				symbol: {
					sprite: '../images/svg-symbol-sprite.svg',
					bust: false
				}
			}
		}))
		.pipe(gulp.dest(_paths.src));
});

gulp.task('svg-sprite', function (callback) {
	runSequence(
		['svg-sprite:css', 'svg-sprite:symbol'],
		callback
	);
});


gulp.task('_images', ['css-sprite', 'svg-sprite'], function () {
	var _imagesDistPath = _paths.current + '/' + _imagesFolder;

	return gulp.src([
		_imagesSrcPath + '/**/*',
		'!' + _svgCssSpritePath + '/',
		'!' + _svgCssSpritePath + '/**',
		'!' + _svgSymbolSpritePath + '/',
		'!' + _svgSymbolSpritePath + '/**',
		'!' + _cssSpritePath + '/',
		'!' + _cssSpritePath + '/**'
	])

		.pipe($.if(_paths.current === _paths.dist, $.imagemin({
			progressive: true,
			svgoPlugins: _svgoPlugins,
			use: [pngquant()]
		})))

		.pipe(gulp.dest(_imagesDistPath))
		.pipe(reload({stream: true}));
});


// Images task
gulp.task('images', function (callback) {
	runSequence(
		'_images',
		callback
	);

	// Watch all files in images folder
	gulp.watch(_imagesSrcPath + '/**/*', ['_images']);
});
