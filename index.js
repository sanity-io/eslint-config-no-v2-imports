const urls = {
  refDocs: 'https://beta.sanity.io/docs/reference',
  migrationGuideStudio: 'https://beta.sanity.io/docs/platform/v2-to-v3',
}

const removedImportSuffix =
  'imports where removed in Sanity v3. ' +
  `Please refer to the migration guide: ${urls.migrationGuideStudio}, ` +
  `or new API-reference docs: ${urls.refDocs}`

const mergedPackages = [
  '@sanity/base',
  '@sanity/core',
  '@sanity/types',
  '@sanity/data-aspects',
  '@sanity/default-layout',
  '@sanity/default-login',
  '@sanity/desk-tool',
  '@sanity/field',
  '@sanity/form-builder',
  '@sanity/initial-value-templates',
  '@sanity/language-filter',
  '@sanity/production-preview',
  '@sanity/react-hooks',
  '@sanity/resolver',
  '@sanity/state-router',
  '@sanity/structure',
  '@sanity/studio-hints',
].sort()

module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          ...mergedPackages.map((packageName) => ({
            group: [`${packageName}/*`],
            message: `Use sanity instead of ${packageName}.`,
          })),
          {
            group: ['config:*'],
            message:
              'config: imports are no longer supported. ' +
              `Please see the new plugin API for alternatives: ${urls.migrationGuideStudio}`,
          },
          {
            group: ['part:*'],
            message: `part: ${removedImportSuffix}`,
          },
          {
            group: ['all:part:*'],
            message: `all:part: ${removedImportSuffix}`,
          },
          {
            group: ['sanity:*'],
            message: `sanity: ${removedImportSuffix}`,
          },
        ],
      },
    ],
  },
}
