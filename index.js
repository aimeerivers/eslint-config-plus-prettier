module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
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
};
