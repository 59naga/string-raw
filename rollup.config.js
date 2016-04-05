import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import pascalCase from 'pascal-case';

export default {
  entry: 'src/index.js',
  dest: 'lib/index.js',
  sourceMap: true,
  format: 'umd',
  moduleName: pascalCase(require('./package.json').name),
  plugins: [
    nodeResolve({ jsnext: true }),
    commonjs(),
    json(),
    babel(),
    uglify(),
  ],
};
