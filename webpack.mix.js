let path = require('path');
let mix = require('laravel-mix');

let root = process.env.NODE_ENV === 'production' ? path.normalize('assets/prod') : path.normalize('assets/dev');

mix.setResourceRoot(root)
    .setPublicPath(root)
    .js('src/vue/webpack.js', 'vue/webpack.js')
    .js('src/vue/vendors/Multiselect.js', 'vue/vendors/Multiselect.js');

mix.webpackConfig({
    output: {
        libraryTarget: 'umd',
    }
});