import HtmlWebpackPlugin from "html-webpack-plugin";
import { watch } from "node:fs";
import path from "node:path";
export default {
    mode:"development",
    entry:"./url/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(import.meta.dirname,"dist"),
        clean:true
    },
    devtool:"eval-source-map",
    devServer:{
        watchFiles:"./url/template.html",
    },
    devServer:{
        watchFiles:"./url/template.html",
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./url/template.html"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            },
               
      {
        test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
        type: "asset/resource",
      },
        ],
    },
    
}