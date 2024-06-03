/* eslint-env node */
module.exports = {
  extends: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // This key is not deleted in eslint-plugin-import
    projectService: {
      maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING: 1,
    },
  },
  plugins: ["@typescript-eslint", "import"],
  root: true,
  overrides: [
    {
      files: "**/*.ts",
      rules: {
        // Comment out this line; there will be no errors
        "import/no-named-as-default": "error",
      },
    },
  ],
};
