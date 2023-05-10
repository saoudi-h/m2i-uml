module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": [
      "error",
      {
        // Ignore arguments starting with _
        "argsIgnorePattern": "^_"
      }
    ]
  },
};
