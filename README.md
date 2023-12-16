# aimeerivers-eslint-prettier-config

Standard config for ESLint and Prettier

## Install

    npm install --save-dev aimeerivers-eslint-prettier-config

Add the following scripts:

    "scripts": {
      "lint": "eslint . --ext .ts,.js --fix",
      "format": "prettier --write ."
    }

## Use

    npm run lint
    npm run format
