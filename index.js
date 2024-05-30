module.exports = {
  root: true,
  extends: ["plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-floating-promises": ["off"],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: false,
      },
    ],
    "sort-imports": ["off"],
    quotes: ["error", "double"],
  },
  plugins: ["unused-imports"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
