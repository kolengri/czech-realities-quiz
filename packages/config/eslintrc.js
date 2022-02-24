const basePlugin = ["import", "react", "react-hooks", "simple-import-sort", "sort-keys-fix"]

const baseExtends = [
  "plugin:@next/next/recommended",
  "plugin:tailwindcss/recommended",
  "plugin:import/errors",
  "plugin:import/warnings",
  "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
]

const baseRules = {
  "@next/next/link-passhref": "off",
  "tailwindcss/no-custom-classname": "off", // This rule is not working with custom colors for Tailwind

  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-unnecessary-type-assertion": "off",
  // to prevent conflicts use simple-import-sort/sort for imports sort instead
  curly: ["error", "all"],

  "import/default": "off",

  "import/export": "off",

  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unused-vars": 0,

  "import/first": "error",

  "import/namespace": "off",

  "import/newline-after-import": "error",

  "import/no-cycle": "off",

  "import/no-duplicates": "error",

  "import/no-named-as-default": "off",

  "import/no-namespace": "off",

  "import/order": "off",

  // to prevent conflicts use simple-import-sort/sort for imports sort instead
  "linebreak-style": ["error", "unix"],

  // '@typescript-eslint/no-floating-promises': 'warn',
  "no-constant-condition": "error",

  "no-shadow": "error",

  // note you must disable the base rule as it can report incorrect errors
  "no-unused-vars": "off",

  "react-hooks/exhaustive-deps": "off",

  "react-hooks/rules-of-hooks": "error",

  "react/display-name": "off",

  "@typescript-eslint/no-floating-promises": "off",

  "react/no-unescaped-entities": "off",

  "react/react-in-jsx-scope": "off",

  "react/prop-types": "off", // TODO: consider to fix and turn on then

  semi: ["error", "always"],

  "simple-import-sort/imports": [
    "error",
    {
      groups: [
        // Node.js builtins. You could also generate this regex if you use a `.js` config.
        // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
        ["^react"],
        ["^@?\\w"],
        [
          "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
        ],

        // Packages. `react` related packages come first.
        // Internal packages.
        ["^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)"],
        // Side effect imports.
        ["^\\u0000"],
        // Parent imports. Put `..` last.
        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
        // Other relative imports. Put same-folder imports and `.` last.
        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        // Style imports.
        ["^.+\\.s?css$"],
      ],
    },
  ],
  "sort-imports": "off",
  "sort-keys": "off",
  "sort-keys-fix/sort-keys-fix": "warn",
}

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [...baseExtends],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  ignorePatterns: [
    "**/web-build/**",
    "**/build/**",
    "**/dist/**",
    "**/node_modules/**",
    "**/__tests__",
    "**/graphql/*",
    "**/generated/*",
    "**/*.json",
  ],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        ...baseRules,
      },
    },
  ],
  overrides: [
    {
      extends: [
        ...baseExtends,
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:import/typescript",
      ],
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      // Specifies the ESLint parser\
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        extraFileExtensions: [".json"],
        project: "./tsconfig.json",
        sourceType: "module",
      },

      plugins: [...basePlugin, "@typescript-eslint"],
      rules: {
        ...baseRules,
        "@typescript-eslint/ban-types": "off",
        "@@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
  plugins: [...basePlugin],
  rules: baseRules,
  ignorePatterns: [".eslintrc.js"],

  settings: {
    "import/ignore": ["node_modules", "dist", "build"],
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
