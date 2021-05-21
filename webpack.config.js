const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')


/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'none',
  entry: {
    wenjs: './src/index',
    'wenjs.min': './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'wenjs',
    globalObject: "this",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                declaration: false
              }
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@src": path.join(__dirname, "src")
    }
  },
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            include: /\.min\.js$/
        })
    ]
}
}
