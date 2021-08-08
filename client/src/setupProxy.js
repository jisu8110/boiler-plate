const proxy = require('ttp-proxy-middleware');
module.exports = function(app){
    app.use(
        '/api',
        proxy({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};