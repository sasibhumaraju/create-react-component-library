import babelPlugin from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import peerExternal from 'rollup-plugin-peer-deps-external';
import postCSS from 'rollup-plugin-postcss';

export default [
   {
    input: 'src/index.jsx',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named'
        }
    ],
    plugins: [
        babelPlugin({
            exclude: 'node-modules/**',
            presets: ['@babel/preset-react'],
            babelHelpers: 'runtime',
            plugins: ['@babel/plugin-transform-runtime']
        }),
        nodeResolve({
            extensions: ['.js', '.jsx']
        }),
        peerExternal(),
        postCSS({
            plugins: [],
            minimize: true,
        })
    ]
   }
]