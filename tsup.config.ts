import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: false,
  skipNodeModulesBundle: true,
  clean: true,
  treeshake: true,
  platform: 'node',
  target: 'es2022',
  splitting: false,
  minify: false,
  keepNames: true,
  sourcemap: true,
  outDir: 'dist',
  format: ['esm']
});
