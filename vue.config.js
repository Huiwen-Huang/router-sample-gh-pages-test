const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 部署到 GitHub
  publicPath: process.env.NODE_ENV === 'production'
    ? '/router-sample-gh-pages-test/'
    : '/'
})
