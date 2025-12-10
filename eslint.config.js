import js from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
    js.configs.recommended,
    prettierRecommended,
    {
    languageOptions: {
        globals: {
            ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, "off"])),
            ...globals.es2021,
            ...globals.node,
        },

        ecmaVersion: 2021,
        sourceType: "module",
    },

    rules: {
        "prettier/prettier": "error",
    },
}];