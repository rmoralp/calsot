const prettierOptions = require('./.prettierrc')

const RULES = {
  OFF: 0,
  WARNING: 1,
  ERROR: 2
}

module.exports = {
  "extends": [
    "standard",
    "prettier",
    "prettier/standard"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "babel",
    "prettier"
  ],
  "rules": {
    "no-undef": [RULES.OFF],
    "no-console": [RULES.WARNING],
    "no-debugger": [RULES.ERROR],
    "no-nested-ternary": [RULES.WARNING],
    "no-only-tests/no-only-tests": [RULES.ERROR],
    "no-prototype-builtins": [RULES.OFF],
    "no-unused-expressions": [RULES.OFF],
    "babel/no-unused-expressions": [RULES.OFF],
    "no-only-tests/no-only-tests": [RULES.OFF],
    "prettier/prettier": [RULES.ERROR, prettierOptions]
  }
}