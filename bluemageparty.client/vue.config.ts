module.exports = {
    publicPath: '/', // Ensure the base URL is correct
    outputDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for static assets
    indexPath: 'index.html', // Main HTML file
    filenameHashing: true, // Enable hashed filenames for cache busting
    productionSourceMap: false, // Disable source maps for production
    configureWebpack: {
      optimization: {
        splitChunks: {
          chunks: 'all', // Split chunks for better caching
        },
      },
    },
  };