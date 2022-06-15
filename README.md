# @sanity/eslint-config-no-v2-imports

ESLint ruleset for marking Studio V2 imports as errors.

Helpful when migration a V2 studio or plugin to V3. Errors link to migration guide and reference docs.

## Installing

```bash
npm install --save-dev @sanity/eslint-config-no-v2-imports
```

## Usage

Create an `.eslintrc` in the root of your project (or an `eslintConfig` entry in `package.json`) and extend the `no-v2-imports` config:

```json
{
  "env": {"node": true, "browser": true},
  "extends": ["@sanity/no-v2-imports"]
}
```

Adjust `env` according to your use case.

## License

MIT © [Sanity.io](https://www.sanity.io/)
