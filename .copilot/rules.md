# Copilot Rules for eslint-config-plus-prettier

## Project Overview

This is an ESLint configuration package that provides standardized linting, formatting, and package validation rules. It's designed to be a comprehensive, opinionated setup for JavaScript/TypeScript projects.

## Code Style & Conventions

### ESLint Configuration

- Always use flat config format (eslint.config.js) - this is the modern ESLint configuration format
- Export configurations as plain objects, not arrays, unless exporting multiple configs
- Keep plugin imports at the top of the config file
- Use descriptive rule configurations with explanatory comments for complex rules
- Prefer `error` for critical issues, `warn` for style/best practice violations, `off` for disabled rules

### Code Quality Rules

- Enforce double quotes for consistency with Prettier configuration
- Use `prefer-const` to encourage immutable variable declarations
- Enable `unused-imports` warnings to keep code clean
- Configure TypeScript rules to be helpful but not overly strict (e.g., no-floating-promises is off)
- Use ignore patterns starting with underscore for intentionally unused variables

### File Organization

- Keep configuration files in the root directory
- Use descriptive names for configuration exports in package.json
- Maintain separate configs for different use cases (module vs server package linting)

## Development Guidelines

### Dependencies

- All linting/formatting dependencies should be in `dependencies` (not devDependencies) since they're used by consuming packages
- Keep dependencies up to date but test compatibility
- Use caret ranges (^) for dependencies to allow compatible updates

### Testing

- Include a simple test.js file to verify the configuration works
- Test changes against real projects before releasing
- Ensure exported configurations are valid and importable

### Versioning & Releases

- Follow semantic versioning
- Update CHANGELOG.md for all releases
- Test configurations work with both JavaScript and TypeScript projects

## File Structure Standards

```
├── .npmpackagejsonlintrc.json          # Package linting for modules
├── .npmpackagejsonlintrc-server.json   # Package linting for servers
├── .prettierrc.json                    # Prettier formatting rules
├── eslint.config.js                    # Main ESLint configuration
├── index.d.ts                          # TypeScript declarations
├── tsconfig.json                       # Base TypeScript config
├── package.json                        # Package metadata & exports
└── README.md                           # Usage documentation
```

## Documentation Requirements

- README should include clear installation and setup instructions
- Provide examples for both basic and advanced usage
- Document all exported configurations
- Include troubleshooting section for common issues
- Show complete example configurations, not just snippets

## When Making Changes

1. Update the main configuration first
2. Test with the test.js file
3. Update documentation if behavior changes
4. Consider backward compatibility
5. Update version in package.json if needed
6. Add entry to CHANGELOG.md

## Coding Preferences

- Use modern ES modules syntax (import/export)
- Prefer explicit configurations over defaults
- Add comments for non-obvious rule choices
- Keep configurations readable and maintainable
- Use consistent indentation (2 spaces)
