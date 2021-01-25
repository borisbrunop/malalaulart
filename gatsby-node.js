/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({
stage,
rules,
loaders,
plugins,
actions,
}) => {
actions.setWebpackConfig({
    module: {
    rules: [
        {
            test: /\.(png|jpg|jpe?g|gif|svg)$/i,
            use: [
                {
                loader: 'file-loader',
                },
            ],
        },
    ],
    },
    plugins: [
    plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
    }),
    ],
})
}