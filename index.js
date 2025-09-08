const port = process.env.PORT || 3000;
try {
  const StaticmanAPI = require('./server');
  const api = new StaticmanAPI();
  api.start(port, () => {
    console.log('Staticman API running on port', port);
  });
} catch (e) {
  console.error('Startup error:', e);
  console.error(e.stack);
}