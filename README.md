# eslint-config-plus-prettier

Standard config for ESLint and Prettier. Also includes an optional TSConfig.

## Install

    npm install --save-dev eslint-config-plus-prettier
    npx install-peerdeps --dev eslint-config-plus-prettier

Add a `.eslintrc.json` file with the following:

    {
      "extends": "eslint-config-plus-prettier"
    }

Add prettier config to `package.json`:

    "prettier": "eslint-config-plus-prettier/.prettierrc.json"

Add the following scripts:

    "scripts": {
      "lint": "eslint . --ext .ts,.js --fix",
      "format": "prettier --write ."
    }

## Optional: TSConfig

Add a `tsconfig.json` file with the following:

    {
      "extends": "eslint-config-plus-prettier/tsconfig.json",
      "include": ["src"] // Specify which files should be compiled
    }

## Use

    npm run lint
    npm run format

- Linting will check for errors and fix formatting in `.ts` and `.js` files.
- Formatting will apply format rules to all possible files.
