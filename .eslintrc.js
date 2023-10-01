module.exports = {
    env: {
        "node": true,
        "es6": true
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
        // Enforce double quotes
        quotes: ["error", "double"],
        // Avoid semicolons
        semi: ["error", "never"],
        // Avoid unused variables
        "no-unused-vars": "error",
    },
    parserOptions: {
        "sourceType": "module"
    }
}
