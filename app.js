const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 设置模板引擎为 EJS
app.set('view engine', 'ejs');

// 路由处理
app.get('/', (req, res) => {
    // 渲染 index.ejs 文件
    res.render('index', { title: 'Welcome to My Node.js Page', message: 'This is a fancy Node.js page!' });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Server URL: http://localhost:${PORT}`);
});
