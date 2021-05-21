const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsConfig = ts.createProject('tsconfig.json')
const paths = require("gulp-ts-paths").default
const del = require('del')

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
module.exports = {
  cleanLib,
  compileTS,
  compile
}
