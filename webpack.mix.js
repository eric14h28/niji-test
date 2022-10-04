/* source : https://laravel-mix.com/ */

const urlLocal = '';// à parametrer selon le projet
let mix = require('laravel-mix');
require('laravel-mix-eslint');
require('laravel-mix-polyfill');

// app js globale
mix.setPublicPath('dist')

    // JS
    //.autoload({ jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"] })
    //.js('assets/js/app.js', 'js')

    // sass
    .sass('assets/styles/index.scss', 'styles') // Styles de base


    // options
    .options({
        processCssUrls: false
    })

    // Fonts
    //.copyDirectory('assets/fonts', 'dist/fonts')

    // Images
    .copyDirectory('assets/images', 'dist/images')

    //polyfill
    .polyfill({
        enabled: true,
        useBuiltIns: "usage",
        targets: "last 1 version, >1%"
     })

if (mix.inProduction()) {
    //mix.version()
} else {
    // Development settings
    // Ajouter un source Map 
    mix.sourceMaps()
}