import * as parser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default {
  languageOptions: {
    parser,
  },
  plugins: {
    "simple-import-sort": simpleImportSort,
  },
  files: ["**/*.ts", "**/*.js"],
  rules: {
    "@typescript-eslint/no-floating-promises": ["off"],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    quotes: ["error", "double"],
  },
};
