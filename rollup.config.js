'use strict';

const babel = require("rollup-plugin-babel");
import typescript from 'rollup-plugin-typescript';
const commonjs = require("rollup-plugin-commonjs");
const uglify = require("rollup-plugin-uglify");
const nodeResolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

module.exports = {
    format: 'cjs',
    entry: "./index.tsx",
    dest: 'bundle.js',
    plugins: [
    	replace({
    	    'process.env.NODE_ENV': JSON.stringify( 'development' ),
    	}),
        typescript({
            // module: 'es2015',
            typescript: require('typescript'), // use latest typescript compiler
            jsx: 'react', // we need the custom JSX parser for inferno
            jsxFactory: 'createElement',
            exclude: "node_modules/**"
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                './node_modules/inferno': ['createVNode', 'render']
            }
        }),
    	nodeResolve({
    	    module: true,
        }),
        uglify()
    ]
};
