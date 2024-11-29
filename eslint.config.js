import * as tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import * as parser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

export default {
  ignores: ["dist/**", "node_modules/**"],
  languageOptions: {
    parser,
  },
  plugins: {
    "simple-import-sort": simpleImportSort,
    "unused-imports": unusedImports,
    "@typescript-eslint": tsEslintPlugin,
  },
  files: ["**/*.ts", "**/*.js"],
  rules: {
    "@typescript-eslint/no-floating-promises": ["off"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
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
    "unused-imports/no-unused-imports": "warn",
  },
};
