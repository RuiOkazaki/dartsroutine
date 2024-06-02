import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  hooks: {
    afterOneFileWrite: [
      'bun run format:fix',
      'bun run analyzer:fix',
      'bun run lint:fix',
    ],
  },
  schema: [
    {
      [process.env.HASURA_GRAPHQL_URL ?? '']: {
        headers: {
          'x-hasura-admin-secret':
            process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? '',
        },
      },
    },
  ],
  documents: ['src/**/*.tsx', 'src/**/*.ts', 'src/**/*.graphql'],
  generates: {
    'src/_shared/lib/gql-codegen/api/generated/': {
      preset: 'client',
      config: {
        gqlTagName: 'graphql',
        fragmentMasking: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: false,
        },
        skipTypename: true,
        immutableTypes: true,
        defaultScalarType: 'unknown',
        enumsAsTypes: true,
        useTypeImports: true,
      },
    },
    'src/_shared/lib/gql-codegen/api/generated/sdk.ts': {
      plugins: [
        {
          add: {
            content: "import * as Type from './graphql.ts'",
          },
        },
        {
          'typescript-generic-sdk': {
            useTypeImports: true,
            documentMode: 'external',
            importDocumentNodeExternallyFrom: './graphql.ts',
            importOperationTypesFrom: 'Type',
          },
        },
      ],
    },
  },
};

export default config;
