module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb", "@vue/typescript/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": ["error", 200],
    "no-param-reassign": ["error", { "props": false }],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: "always",
        ObjectPattern: { multiline: true },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
