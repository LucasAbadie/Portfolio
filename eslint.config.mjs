import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,

  // TypeScript ESLint recommended rules (without type checking yet)
  ...tseslint.configs.recommended,

  // Prettier integration (disables rules that conflict with Prettier)
  prettier,

  // Files and folders to ignore
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/build/**",
      "**/dist/**",
      "**/out/**",
      "**/coverage/**",
      ".DS_Store",
      "next-env.d.ts",
      "*.config.{js,mjs,cjs}",
    ],
  },

  // Global project configuration
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      // Variables
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-var": "error",
      "prefer-const": "warn",

      // Best practices
      eqeqeq: ["error", "always"],
      "no-console": "off", // Backend needs console, frontend will override
      "consistent-return": "warn",
      "no-shadow": ["warn", { builtinGlobals: false }],

      // Security
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-return-await": "warn",

      // Error handling
      "no-throw-literal": "error",
      "prefer-promise-reject-errors": "error",

      // Modern JavaScript
      "prefer-arrow-callback": "warn",
      "prefer-template": "warn",
      "object-shorthand": "warn",
    },
  },

  // Override for CommonJS files (.cjs)
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
  },

  // Next.js specific configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        React: "readonly",
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // Configuration for TypeScript files with type checking
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Console - Error in frontend (should use proper logging)
      "no-console": ["error", { allow: ["warn", "error"] }],

      // Unused vars with better pattern
      "no-unused-vars": "off", // Disabled for TypeScript
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
    },
  },

  // Configuration for JavaScript files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Console - Error in frontend (should use proper logging)
      "no-console": ["error", { allow: ["warn", "error"] }],

      // React best practices (if you install eslint-plugin-react)
      // Uncomment when plugins are installed:
      // "react/prop-types": "off", // TypeScript handles this
      // "react/react-in-jsx-scope": "off", // Not needed in Next.js
      // "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "warn",

      // Accessibility (if you install eslint-plugin-jsx-a11y)
      // Uncomment when plugin is installed:
      // "jsx-a11y/alt-text": "warn",
      // "jsx-a11y/anchor-is-valid": "warn",
    },
  },

  // Override for Jest tests
  {
    files: [
      "**/__tests__/**/*.{js,cjs,mjs,jsx,ts,tsx}",
      "**/*.test.{js,cjs,mjs,jsx,ts,tsx}",
      "**/*.spec.{js,cjs,mjs,jsx,ts,tsx}",
    ],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      "no-console": "off", // Allow console in tests
    },
  },
];
