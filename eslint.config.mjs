import pluginJs from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import hooksPlugin from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2021,
        project: "tsconfig.json",
        sourceType: "module",
      },
    },
  },
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    settings: {
      react: { version: "detect" },
    },
  },
  {
    plugins: { "react-hooks": hooksPlugin },
    rules: hooksPlugin.configs.recommended.rules,
    settings: { react: { version: "detect" } },
  },
  { ignores: [".next/"] },
  pluginNext.configs["core-web-vitals"],
  {
    rules: {
      "react/react-in-jsx-scope": 0,
      "react/prop-types": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "linebreak-style": ["error", "unix"],
      semi: ["error", "always"],
      "no-extra-semi": "error",
      "no-console": 0,
      "prefer-template": "error",
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/no-empty-object-type": 0,
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-floating-promises": 0,
      "@typescript-eslint/no-unnecessary-condition": 0,
      "react/no-unescaped-entities": 0,
      "@next/next/no-img-element": 0,
    },
  },
  {
    ignores: [
      "*/**.js",
      "*.js",
      "*.mjs",
      "*/**.mjs",
      "next-env.d.ts",
      ".next",
      ".vercel",
      ".vscode",
      "eslint.config.mjs",
      ".claude",
      "scripts/",
      "docs/",
    ],
  },
];
