const path = require('path')

module.exports = env => {
        // console.log(env.NODE_ENV)
    return{
       mode: env.NODE_ENV,
       entry:{
           index: path.resolve(__dirname, './src/index.js'),
           '@babel/polyfill': ['@babel/polyfill'],
       },
       output:{
           path: path.resolve(__dirname, 'dist'),
           filename: '[name].js'
       },
       devServer:{
           port: 9000
       },
       module:{
           rules:[

                // JS / JSX loader
                {
                    exclude: /(node_modules)/,
                    test: /\.(js|jsx)$/,
                    use:{
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@babel/plugin-proposal-class-properties']
                        }
                    }
                },

                //URL Loader
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    use:{
                        loader: 'url-loader'
                    }
                }

           ]
       }
    }
}