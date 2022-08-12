module.exports = {
    devServer: {
        proxy: {
            '/news': {
                target: 'https://interface.sina.cn',
                changeOrigin: true,
                pathRewrite: {
                    "^/news": '/news'
                }
            }
        }
    },
    publicPath: process.env.NODE_DEV === 'production' ? '/covid19' : '/'
}