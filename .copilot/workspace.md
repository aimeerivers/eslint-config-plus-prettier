You are assisting with the eslint-config-plus-prettier package, a configuration package for ESLint, Prettier, and Package Lint.

When working in this codebase:

1. **Configuration Focus**: This is a config package - prioritize ease of use and sensible defaults for consuming projects

2. **Testing**: Always test configuration changes with `npm run lint`, `npm run format`, and `npm run package:lint`

3. **Dependencies**: All tooling goes in `dependencies` not `devDependencies` since consumers need them

4. **Compatibility**: Support both JavaScript and TypeScript projects, maintain ESLint v9+ flat config format

5. **Documentation**: Keep README examples up-to-date when changing configurations

6. **Exports**: Use package.json exports field for clean sub-imports like `eslint-config-plus-prettier/prettier`

Remember: Changes here affect all downstream projects using this configuration package.
