module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["react", "import", "@typescript-eslint", "jest", "simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  rules: {
    "linebreak-style": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-anonymous-default-export": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@mui/*/*/*", "!@mui/material/test-utils/*"],
      },
    ],
    "prettier/prettier": 0,
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "**/components/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "**/provider/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "**/reducer/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "**/types/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "**/hooks/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "**/utils/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "**/assets/**",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src", "dist"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "no-unused-vars": 0,
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  ignorePatterns: [".eslintrc.js"],
};
