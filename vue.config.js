module.exports = {
    configureWebpack: {
        resolve: {
            //extensions:[], //配置省略文件后缀
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}
