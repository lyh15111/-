const {
    override,
    addDecoratorsLegacy,
    fixBabelImports,
    addPostcssPlugins
} = require('customize-cra');

module.exports = override(
    addDecoratorsLegacy(), //支持装饰器语法
    fixBabelImports('import', { //按需导入antd-mobile
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    //配置pxtorem
    addPostcssPlugins([require('postcss-pxtorem')({
        rootValue: 37.5, //这里根据设计稿大小配置,一般是375
        propList: ['*']
     }),])
)
