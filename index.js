module.exports = {
  root: true,
  rules: {
    "@typescript-eslint/no-floating-promises": ["off"],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "sort-imports": ["off"],
    quotes: ["error", "double"],
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
