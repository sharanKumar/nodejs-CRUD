import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    rules: {
      // Add any custom rules here
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];