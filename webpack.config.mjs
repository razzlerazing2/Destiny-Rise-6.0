import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: './index.js', // Entry point for your application
  target: 'node', // Target environment is Node.js
  externals: [nodeExternals()], // Exclude Node.js built-in modules and dependencies from the bundle
  output: {
    path: path.resolve('dist'), // Output directory for bundled files
    filename: 'bundle.js', // Name of the output file
  },
  mode: 'production', // Set to 'development' for dev builds
  resolve: {
    extensions: ['.js', '.json'], // Allow importing .js and .json files
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/, // Don't transpile dependencies in node_modules
        use: 'babel-loader', // Use Babel for transpiling ES6+ syntax
      },
    ],
  },
};
