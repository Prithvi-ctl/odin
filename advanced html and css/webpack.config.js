import HtmlWebpackPlugin from "html-webpack-plugin";
import { watch } from "node:fs";
import path from "node:path";
export default {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(import.meta.dirname,"dist"),
        clean:true
    },
    devtool:"eval-source-map",
    devServer:{
        watchFiles:"./src/template.html",
    },
    devServer:{
        watchFiles:"./src/template.html",
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/template.html"
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