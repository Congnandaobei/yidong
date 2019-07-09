/**
 * 注意:当前文件是node.js执行的，只能写node.js代码
 * post-css是一个后处理器
 * 说白了就是你与预处理less,sass,处理之后的css再进一步处理
 * 该文件是post-css的配置文件
 * 它有很多插件:
 *      autoprefixer 用来处理样式兼容前缀用的，你不用写兼容前缀
 *      postcss-pxtorem 用来将px转rem用的
 */

/**
  * 如果是vant的样式，则基于37.5去转(因为vant是基于 375 设备像素写的) px 像素
  * 如果是我们自己的，则基于75基准值去转换
  * 转换工具以样式文件为单位进行转换的
  * 每一个文件的转换都要调用这个函数，我们可以在这里为不同的文件设置不同的转换规则
  * file: 文件信息对象
  *   dirname 也就是当前文件的目录路径
  */

const { sep } = require('path')
// sep说白了就是\\和\只不过在windows和苹果路径下面不一样
module.exports = ({ file }) => {
  // path.sep用于获取操作系统的路径分隔符
  const rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5 // vant转换的基准值
    : 75 // 我们设计稿转换的基准值

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}
