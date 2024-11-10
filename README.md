# eslint-config-plus-prettier

Standard config for ESLint, Prettier and Package Lint. Also includes an optional TSConfig.

## Install

```bash
npm install --save-dev eslint-config-plus-prettier
```

Add the following scripts to your `package.json`:

```json
    "scripts": {
      "format": "prettier --write .",
      "format:check": "prettier --check .",
      "lint": "eslint --fix",
      "lint:check": "eslint",
      "package:lint": "npx npm-package-json-lint ."
    }
```

### Configure ESLint

Add a `eslint.config.js` file with the following:

```javascript
import config from "eslint-config-plus-prettier";

export default [config];
```

Consider adding a `.eslintignore` file to avoid trying to lint compiled code in the `dist` folder:

```text
dist
```

### Configure Prettier

Add prettier config to `package.json`:

```json
    "prettier": "eslint-config-plus-prettier/.prettierrc.json"
```

Consider adding a `.prettierignore` file to avoid formatting generated files:

```text
package-lock.json
CHANGELOG.md
```

### Configure Package Lint

Add a `.npmpackagejsonlintrc.json` file with the following:

```json
{
  "extends": "eslint-config-plus-prettier/.npmpackagejsonlintrc.json"
}
```

### Configure TSConfig (optional)

Add a `tsconfig.json` file with the following:

```json
{
  "extends": "eslint-config-plus-prettier/tsconfig.json",
  "include": ["src"], // Files to be compiled
  "compilerOptions": {
    "outDir": "dist" // Compiled directory
  }
}
```

## Use

```bash
npm run lint
npm run format
npm run package:lint
```

- `lint` will check for errors and fix formatting in `.ts` and `.js` files.
- `format` will apply format rules to all possible files.
- `package:lint` will warn of any inconsistencies in the `package.json` file.
