

const devServerProperties = {
  entry: {
    app: './src/index.js',
  },
  proxy: {
    '/user-api': {
      target: 'http://localhost:8080',
      pathRewrite: { '/user-api': '' },
      changeOrigin: true,
      secure: false,
    },
  },
};


module.exports = devServerProperties;
