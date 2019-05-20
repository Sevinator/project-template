const path = require('path');
const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/js/client/index.js',
    mode: "production",
    devtool: "source-map",
    output: {
        filename: '../dist/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            idendifier: 'module',
            $: 'jquery',
            Vue: "vue"
        }),


        new WebpackPwaManifest({
            lang: 'fr', // Langue choisie pour l'application
            dir: "ltr", // Sens du texte
            name: "Nom de l'application",
            description: "Description de l'application",
            background_color: '#ffffff',
            theme_color: "#ffffff",
            short_name: "Nom court de l'appli",
            start_url: "/", // Base d'URL sur laquelle tournera l'appli
            display: "standalone",
            orientation: "natural",
            fingerprints: false,
            crossorigin: 'use-credentials', // Sert pour les requêtes cross-origin
            icons: [
                {
                    src: "",
                    sizes: [] // Devrait générer toutes les tailles, si format SVG ?
                }
            ]
        }),

        new HtmlWebpackPlugin({
            minify: true,
            filename: "index.html",
            favicon: "./src/assets/img/favicon.ico", // Chemin générique vers l'icone
            title: "Titre du document",
            meta: {
                charset: "UTF-8",
                viewport : "width=device-width, initial-scale=1"
            },
            template: "./src/js/client/index.html"
        }),

        new workboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [{
                // urlPattern: new RegExp(''),
                // handler: 'StaleWhileRevalidate'
            }]
        })
    ]
};
