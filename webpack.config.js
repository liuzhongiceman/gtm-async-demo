module.exports = {
    entry: './src/App.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: ['ng-annotate-loader', 'ts-loader']
        }]
    }
}