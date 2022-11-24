// import resolve from "@rollup/plugin-node-resolve";
import {babel} from "@rollup/plugin-babel";
// import {terser} from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
// import json from '@rollup/plugin-json';
// const postcsss = require('postcss');
// import resolve from "@rollup/plugin-node-resolve";
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
// import sassPlugin from 'rollup-plugin-sass';
// import sass from 'sass'
// import autoprefixer from 'autoprefixer'
// import sassPostcss from '@koffeine/rollup-plugin-sass-pos tcss';
// import scss from 'rollup-plugin-scss'
// import styles from 'rollup-plugin-styles';
// const globals = {
//     ...packageJson.devDependencies,
// };
// import autoNamedExports from 'rollup-plugin-auto-named-exports';
// const twistUrlAssets = require('postcss-twist-url-assets');
// const gulp = require('gulp');
// const gulppostcss = require('gulp-postcss');
// import styles from "rollup-plugin-styles";
import externals from "rollup-plugin-node-externals";
// import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import auto from '@rollup/plugin-auto-install';
const packageJson = require("./package.json");

export default [
    {
        onwarn: function (warning) {
            if (warning.code === 'THIS_IS_UNDEFINED') {
                return;
            }
            console.warn(warning.message);
        },
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [

            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
            // auto(),
            // del({ targets: "dist/*" }),
            // externals({ deps: true }),
            //
            // resolve(),
            // nodeResolve({
            //     extensions: [".js", ".jsx",".ts", ".tsx"],
            // }),
            // commonjs(),
            //
            // commonjs(),
            // // babel({
            // //     babelHelpers: "runtime",
            // //     exclude: "**/node_modules/**",
            // //     extensions: [".js", ".jsx", ".ts", ".tsx"],
            // // }),
            //
            // // typescript({ tsconfig: "./tsconfig.json" }),
            //
            // // typescript({tsconfig: "./tsconfig.json", preserveSymlinks: false}),
            // postcss(),
        ],
    },
    // {
    //     input: "dist/esm/index.d.ts",
    //     output: [{file: "dist/index.d.ts", format: "esm"}],
    //     plugins: [dts.default()],
    //     external: [/\.(css|less|scss)$/],
    // },
];