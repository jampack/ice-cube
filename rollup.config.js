import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  input: {
    components: 'src/components/index.js',
    themes: 'src/themes/index.js',
  },
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    external(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    del({ targets: ['dist/*'] }),
  ],
  external: [...Object.keys(pkg.peerDependencies || {}), 'prop-types'],
};
