'use strict';

var exec = require('child_process').exec;
var _backstopJSExec = function (command, callback) {
	exec('cd node_modules/backstopjs && ' + command, function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		callback(err);
	});
};


gulp.task('test:reference', function (callback) {
	_backstopJSExec('gulp reference', callback);
});


gulp.task('test', function (callback) {
	_backstopJSExec('gulp test', callback);
})
