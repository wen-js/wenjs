const gulp = require('gulp')
const path = require('path')
const through = require('through2')
const ts = require('gulp-typescript')
const tsConfig = ts.createProject('tsconfig.json')
const del = require('del')
const bump = require('gulp-bump')
const watch = require('gulp-watch')
const shell = require('gulp-shell')

const changeAliaPath = (config) => {
  const aliasList = []
  for(let alia in config.compilerOptions.paths) {
    aliasList.push({
      aliaPath: alia.replace('*', ''),
      realPath: config.compilerOptions.paths[alia][0].replace('*', '')
    })
  }
  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // 返回空文件
      cb(null, file);
    }
    const lines = file.contents.toString().split("\n")
    for(let index = 0; index < lines.length; index++) {
      const line = lines[index]
      const lineArr = line.split('from ')
      if(lineArr.length > 1) {
        const importPath = lineArr[1]
        for(let alia of aliasList) {
          if(importPath.indexOf(alia.aliaPath) >= 0) {
            let relativePath = path.relative(file.path, alia.realPath)
            if(relativePath.length == 2) {
              relativePath = relativePath.replace('..', './')
            }else {
              relativePath = relativePath.replace('\\', '/').replace(/\/..$/g, '/')
            }
            lines[index] = line.replace(alia.aliaPath, relativePath)
          }
        }
      }
    }
    file.contents = new Buffer(lines.join("\n"))

    cb(null, file);
  })
}

const cleanLib = () => {
  return del([
    'lib',
  ])
}

const compileTS = (cb) => {
  return gulp.src('src/**/*.ts')
  .pipe(changeAliaPath(tsConfig.config))
  .pipe(tsConfig())
  .pipe(gulp.dest('lib'))
}

const compile = gulp.series([cleanLib, compileTS])


const changeVersion = () => {
  return gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest(process.cwd()));
}

const watchTS = () => {
  return watch('src/**/*', shell.task('yarn build'))
}

module.exports = {
  cleanLib,
  compileTS,
  compile,
  changeVersion,
  watchTS
}
