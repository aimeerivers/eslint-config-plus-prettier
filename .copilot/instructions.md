# GitHub Copilot Instructions

You are working in the `eslint-config-plus-prettier` repository, which is an ESLint configuration package that provides standardized linting, formatting, and package validation for JavaScript/TypeScript projects.

## Key Context

### Project Purpose

This is a **configuration package** that other developers will install and use to standardize their code quality tools. Every change should consider the impact on consuming projects.

### Architecture

- **Main export**: `eslint.config.js` - flat config format ESLint configuration
- **Sub-exports**: Prettier, Package Lint, and TypeScript configurations
- **Package type**: ES module (`"type": "module"`)

### Dependencies Philosophy

All linting/formatting tools are included as `dependencies` (not `devDependencies`) because consuming packages need them at runtime.

## Code Suggestions

### When modifying ESLint rules:

- Always test changes with the `test.js` file
- Consider both JavaScript and TypeScript use cases
- Prefer `warn` over `error` for style issues
- Use `error` only for potential bugs or critical issues
- Add comments explaining complex rule configurations

### When updating dependencies:

- Check compatibility between ESLint plugins
- Test that configurations still work after updates
- Update peer dependency ranges if needed
- Consider breaking changes in semantic versioning

### For configuration changes:

- Maintain backward compatibility when possible
- Update README examples if behavior changes
- Test exports work correctly (`npm pack` and test in another project)
- Ensure all exported configurations are valid

## Common Tasks

### Adding new ESLint rules:

```javascript
// In eslint.config.js, add to rules object with explanation
"new-rule-name": ["warn", {
  // configuration
}], // Brief comment explaining why this rule is useful
```

### Adding new exports:

```json
// In package.json exports field
"./new-config": "./path-to-config.json"
```

### Testing changes:

1. Run `npm run lint` to test ESLint config
2. Run `npm run format` to test Prettier config
3. Run `npm run package:lint` to test package lint config
4. Test in a real project by linking: `npm link` then `npm link eslint-config-plus-prettier`

## Avoid These Patterns

- Don't add rules that are purely personal preference without clear benefit
- Don't make breaking changes without major version bump
- Don't include development-only dependencies in main dependencies
- Don't assume all users will have TypeScript
- Don't over-configure - keep rules focused and purposeful

## When Suggesting Improvements

Focus on:

- Developer experience improvements
- Better error messages and documentation
- Compatibility with popular tools and frameworks
- Performance optimizations
- Clear configuration examples
