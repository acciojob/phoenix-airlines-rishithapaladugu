const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
    publicPath: '/', // Public URL of the output directory when referenced in a browser
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regex to match files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
        },
      },
      {
        test: /\.css$/, // Regex to match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Regex to match image files
        use: {
          loader: 'file-loader', // Use file-loader for images
          options: {
            name: '[path][name].[ext]', // Preserve original name and path
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve content from the output directory
    compress: true, // Enable gzip compression
    port: 3000, // Port number
    historyApiFallback: true, // Enable support for HTML5 History API
  },
  mode: 'development', // Set mode to development
};
