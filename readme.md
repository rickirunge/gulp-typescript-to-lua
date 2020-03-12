# gulp-typescript-to-lua

> Transpiles Typescript to Lua with [`TypescriptToLua`](https://github.com/TypeScriptToLua/TypeScriptToLua).

*Issues with the transpiler should be reported on the [`TypescriptToLua` issue tracker](https://github.com/TypeScriptToLua/TypeScriptToLua/issues).*

## Install

```bash
npm install -D gulp-typescript-to-lua
```

## Usage

```javascript
const gulp = require('gulp');
var tstl = require('gulp-typescript-to-lua');

exports.default = () => (
	gulp.src('src/*.lua')
		.pipe(tstl())
		.pipe(gulp.dest('dist'))
);
```
