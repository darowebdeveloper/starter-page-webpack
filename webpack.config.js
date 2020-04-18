const path = require('path');
const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("autoprefixer"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
];
module.exports =  {
    entry: path.resolve(__dirname, 'src/js/App.js'),
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundled.js'
    },
    devServer: {
        before: (app, server) => {
            server._watch('./src/**/*.html');
        },
        contentBase: path.join(__dirname, 'src'),
        port: 3300,
        hot: true,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader?url=false',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postCSSPlugins
                        }
                    }
                ]
            }
        ]
    }
}