import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";

/** @type { import("rollup").RollupOptions } */
const config = {
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "cjs",
    },
    plugins: [resolve(), typescript(), commonJS()],
};

export default config;
