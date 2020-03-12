var through = require('through2');
var gutil = require('gulp-util');
var Buffer = require('buffer').Buffer;

var tstl = require('typescript-to-lua');

module.exports = function () {
    'use strict';

    return through.obj(function (file, encoding, callback) {
        if (file.isNull()) {
            this.push(file);
            return callback();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-typescript-to-lua', 'Streaming not supported'));
            return callback();
        }

        try {
            file.contents = new Buffer(tstl.transpileString(file.contents.toString()).toString());
        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-typescript-to-lua', err));
        }

        this.push(file);
        callback();
    });
};