// entry -> output
const path = require('path');

module.exports = {
    entry: './src/app.js', // where it should start

    output: {
        path: path.resolve(__dirname, 'public'), // need full path
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            loader: 'babel-loader', // va aller voir la config dans .babelrc
            test: /\.js$/, // regular expression pour prendre tout les fichier .js. $ = fin du fhicer
            exclude: /node_modules/

        }, {

            test: /\.s?css$/,
            use: [ // array of loader
                'style-loader', // met le css dans un tag <style>
                'css-loader', // charge le css
                'sass-loader'

            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    }
};
