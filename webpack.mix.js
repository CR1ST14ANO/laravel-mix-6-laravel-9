const mix = require('laravel-mix');

const path = require('path');

mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist'), // or 'vendor/tightenco/ziggy/dist/vue' if you're using the Vue plugin
});


mix
    .js('resources/js/app.js', 'public/js')
    .react()
    .scripts('node_modules/jquery/dist/jquery.js', 'public/js/jquery.js')
    .scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/js/bootstrap.js')
    .sass('resources/views/scss/style.scss', 'public/css/bootstrap.css')
    .postCss('resources/css/app.css', 'public/css')
    .webpackConfig({
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
        resolve: {
         alias: {
                '@': path.resolve('resources/js')
            }
        }
    })
    .sourceMaps()
    .disableSuccessNotifications();

