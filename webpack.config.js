const path=require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin=require("html-webpack-plugin");
const webpack=require("webpack");
const isDev=process.env.NODE_ENV=='development';
const config={
    mode:isDev?'development':'production',
    target:'web',
    entry:{
        home:path.resolve(__dirname,'./src/main.js'),     //测试主入口
        music:path.resolve(__dirname,'./src/index.js')     //vue入口
    },
    output:{
        filename:'js/[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            title:'app',
            template:'src/index.html'
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:["vue-loader"],
               exclude:[path.resolve(__dirname,"node_modules"),]
            },
            {
                test:/\.(less|css)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
               exclude:[path.resolve(__dirname,"node_modules"),]
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                          limit: 1024
                        }
                    }
                ],
               exclude:[path.resolve(__dirname,"node_modules"),]
            },
           {
               test:/\.js$/,
               use:[
                  {
                      loader: "babel-loader",
                      options:{
                          plugins:["transform-es2015-arrow-functions"],
                          presets:["env"],
                      },
                  }
               ],
               exclude:[path.resolve(__dirname,"node_modules"),]
           }
        ]
    },
};
if(isDev){          //开发环境
 config.devtool="inline-source-map";
 config.devServer={
     port:8000,
     host:'0.0.0.0',
     overlay:{
         errors:true
     },
     hot: true
 };
 config.plugins.push(new webpack.HotModuleReplacementPlugin(),new webpack.NoEmitOnErrorsPlugin);
}
module.exports=config;