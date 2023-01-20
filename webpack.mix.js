let mix = require('laravel-mix');


mix.js('resources/js/app.js', 'js/app.js').setPublicPath('public');

mix.css('resources/css/app.css', 'css/app.css').setPublicPath('public');
