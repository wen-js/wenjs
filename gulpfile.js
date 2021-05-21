const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsConfig = ts.createProject('tsconfig.json')
const paths = require("gulp-ts-paths").default
const del = require('del')
var bump = require('gulp-bump');

const cleanLib = () => {
  return del([
    'lib',
  ])
}

const compileTS = (cb) => {
  return gulp.src('src/**/*.ts')
  .pipe(paths({ config: tsConfig.config, baseDir: process.cwd() }))
  .pipe(tsConfig())
  .pipe(gulp.dest('lib'))
}

const compile = gulp.series([cleanLib, compileTS])


const changeVersion = () => {
  return gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest(process.cwd()));
}

module.exports = {
  cleanLib,
  compileTS,
  compile,
  changeVersion
}
