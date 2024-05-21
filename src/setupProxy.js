const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/SpringSecurityMVC',
    createProxyMiddleware({
      target: 'http://localhost:8080',  // 여기에 백엔드 서버의 주소를 입력합니다.
      changeOrigin: true,
    })
  );
};