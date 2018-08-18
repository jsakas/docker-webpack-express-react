module.exports = {
    "parser": "babel-eslint",
    "extends": ["standard", "plugin:react/recommended"],
    "plugins": [
        "standard",
        "promise",
        "react"
    ],
    "settings": {
        "react": {
            "version": "16.4.2"
        }
    },
    "rules": {
        camelcase: "off",
        "curly": [2, "all"],
        "brace-style": [2, "1tbs"],
        "semi": [2, "always"],
        "key-spacing": "off",
        "no-multi-spaces": "off",
        "func-call-spacing": "off",
        "no-unexpected-multiline": "off",
        "space-before-function-paren": "off",
        "no-unused-expressions": ["off", { "allowTernary": true }],
        "no-unneeded-ternary": "off",
        "space-infix-ops": "off",
        "handle-callback-err": "off",
        "react/prop-types": "off",
        "react/no-find-dom-node": "off",
        "react/jsx-wrap-multilines": 2,
        "react/display-name": "off",
        "react/sort-comp": [2, {
            order: [
              'state',
              'urls',
              'static-methods',
              'lifecycle',
              '/^handle.+$/',
              '/^on.+$/',
              'everything-else',
              'render',
            ],
            groups: {
                rendering: [
                    '/^render.+$/',
                    'render',
                ]
            }
        }],
        "no-class-assign": "off",
        "prefer-promise-reject-errors": "off",
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
        }]
    },
    "parserOptions": {
        "ecmaFeatures": {
            "sourceType": "module",
            "jsx": true
        }
    },
    "globals": {
        "jest": true,
        "it": true,
        "test": true,
        "describe": true,
        "beforeAll": true,
        "afterAll": true,
        "beforeEach": true,
        "afterEach": true,
        "expect": true,
    }
};
