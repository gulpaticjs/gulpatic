'use strict';

var fs = require('fs');
var _paths = require('../config/paths');

var dataPath = _paths.src + '/data.json';


gulp.task('_twig', function () {
	return gulp.src(_paths.src + '/*.twig')
		.pipe($.data(function () {
			return JSON.parse(fs.readFileSync(dataPath));
		}))
		.pipe($.twig())
		.pipe(gulp.dest(_paths.dist))
		.pipe(reload({stream: true}));
});


// Templates task
gulp.task('templates', function () {
	// Compile Twig files
	runSequence('_twig');


	// Watch Twig files
	gulp.watch(_paths.src + '/**/*.twig', ['_twig']);

	// Watch data.json
	gulp.watch(dataPath, ['_twig']);
})
