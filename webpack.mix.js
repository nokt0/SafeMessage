const mix = require('laravel-mix');
require("laravel-mix-react-typescript-extension");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.reactTypeScript('resources/js/index.tsx', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
