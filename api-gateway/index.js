const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// routing ke masing-masing service
app.use('/users', createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true
}));

app.use('/penghuni', createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true
}));

app.use('/kamar', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true
}));

//app.use('/aturan', createProxyMiddleware({
//    target: 'http://localhost:3004',
  //  changeOrigin: true
//}));

app.listen(3000, () => {
    console.log("API Gateway jalan di port 3000");
});