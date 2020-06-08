module.exports = {
    css: { // [Reference] https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/_variables.scss";`
            }
        }
    },
    // chainWebpack: config => {
    //     // clear the existing images module
    //     const imagesRule = config.module.rule('images');
    //     imagesRule.uses.clear();

    //     imagesRule
    //     // you can set whatever you want or remove this line completely
    //         .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
    //         .use('file-loader')
    //         .loader('file-loader')
    //         .tap(options => {
    //         return {
    //             ...options,
    //                 limit: -1 // no limit
    //             };
    //         })
    //         .end();
    // },
    configureWebpack: {
        externals: {
            'jquery': 'jQuery'
        }
    },
    publicPath: './'
}
