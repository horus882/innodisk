module.exports = {
    configureWebpack: {
        externals: {
            'jquery': 'jQuery'
        },
        // css: {
        //     loaderOptions: {
        //         sass: {
        //             data: `@import "@/pathto/variables.scss";`
        //         }
        //     }
        // }
        // rules: [
        //     {
        //         test: /\.(sass|scss)$/,
        //         use: [
        //             'vue-style-loader',
        //             'css-loader',
        //             'postcss-loader',
        //             {
        //                 loader: 'sass-loader',
        //                 options:{
        //                     data: `@import "variables.scss";`
        //                 }
        //             }
        //         ]
        //     }
        // ],
    },
    publicPath: './'
}
