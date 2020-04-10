const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')
const apiMocker = require('mocker-api')
const Timestamp = new Date().getTime()
module.exports = {
  publicPath: './',
  outputDir: 'dist', // 打包输出目录
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 生产环境是否生成sourceMap文件用于跟踪问题
  productionSourceMap: false,
  // 是否不通过代码检查时，输出到命令行，
  // error 配置为使编译失败
  lintOnSave: false,
  // webpack打包配置·
  configureWebpack: config => {
    // webpack插件
    config.plugins.push()
    if (process.env.NODE_ENV === 'production') {
      // 生产环境配置...
      config.output.filename = `[name].${Timestamp}.js`
      config.output.chunkFilename = `[name].${Timestamp}.js`
    } else {
      // 开发环境配置...
    }
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         autoprefixer(),
  //         pxtorem({
  //           rootValue: 192.0,
  //           propList: ["*"]
  //         })
  //       ]
  //     }
  //   }
  // },
  // node代理
  devServer: {
    // before(app) {
    //   apiMocker(app, path.resolve("./src/mock.js"));
    // },
    hot: true, // 热加载
    port: 3000, // 端口
    open: false, // 是否自动打开默认浏览器
    // 代理配置
    proxy: {
      '/icms': {
        // target: 'http://11.12.106.75:8084',//测试环境
        //target: 'http://192.168.7.40:7098', //开发环境
        // target:'http://192.168.36.32:3330',//王振华
         target: 'http://localhost:3330', //刘伟
        // target:'http://192.168.36.34:3330',//岳小兵
        // target:'http://192.168.36.36:3330',//张鸣
        // target: 'http://192.168.36.38:3330',//李波
        // target:'http://192.168.3.131:3330',
        changeOrigin: true
      }
    }
  }
}
