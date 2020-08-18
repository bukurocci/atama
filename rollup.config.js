import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: pkg.name
  },
  external: [
    ...Object.keys(pkg.dependencies || {})
  ],
  plugins: [
    nodeResolve(),
    typescript(),
    terser()
  ]
};