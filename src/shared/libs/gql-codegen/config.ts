import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
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
  generates: {
    'src/shared/libs/gql-codegen/generated/': {
      preset: 'client',
      plugins: ['typescript-urql'],
    },
  },
};

export default config;
