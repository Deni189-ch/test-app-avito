const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'https://boiling-refuge-66454.herokuapp.com/images/',
      changeOrigin: true,
      paathRewrite: {
        '^/api':'/',
      },
    })
  )
};
