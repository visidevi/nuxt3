module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  rules: {
    "vue/no-v-html": "off",
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        printWidth: 140,
      },
    ],
    "no-console": "off",
    "no-debugger": "warn",
    "no-extra-boolean-cast": "off",
    "vue/multi-word-component-names": "off",
  },
};
