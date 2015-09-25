var fs = require('fs');
var async = require('async');

async.waterfall([
	function(cb) {
		fs.rename('test.txt', 'old.txt', function(err) { cb(err); });
	},
	function(cb) {
		fs.writeFile('temp.txt', 'something else', function(err) { cb(err); });
	},
	function(cb) {
		fs.rename('temp.txt', 'test.txt', function(err) { cb(err); });
	},
	function(cb) {
		fs.unlink('old.txt', function(err) { cb(err); });
	}
], function(err) { if (err) { console.log('ERROR', err); } else { console.log('FINISHED'); } });