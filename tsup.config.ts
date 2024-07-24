import { defineConfig } from "tsup";
import * as gconfig from "./gstyles.config.ts";
export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./index.ts", "./index.web.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
