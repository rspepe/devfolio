const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'rspepe DevFolio.'
    }
  }
})
