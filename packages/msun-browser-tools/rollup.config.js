import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import alias from "rollup-plugin-alias";

export default {
  input: "index.js",
  output: {
    file: "dist/tools.cjs",
    format: "cjs",
  },
  plugins: [
    resolve(),
    commonjs(),
    alias({
      entries: [{ find: "@", replacement: `${__dirname}/src` }],
    }),
  ],
};
