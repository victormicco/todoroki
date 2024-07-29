import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: "src",
    globals: true,
    include: ["**/*.test.ts", "**/*.spec.ts"], // Include unit and integration test files
  },
  plugins: [tsconfigPaths()],
});
