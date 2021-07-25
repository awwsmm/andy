const path = require( 'path' );

// see: https://medium.com/jspoint/integrating-typescript-with-webpack-4534e840a02b

module.exports = {

  // bundling mode
  mode: 'production',

  // entry files
  entry: './scripts/index.ts',

  // output bundles (location)
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: 'index.js',
  },

  // file resolutions
  resolve: {
    extensions: [ '.ts', '.js' ],

    alias: {
      src: path.resolve(__dirname, 'src/')
    },
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: "tsconfig-build.json"
          }
        }],
        exclude: /node_modules/,
      }
    ]
  },

  devtool: 'source-map'
};