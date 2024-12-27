import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'property',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
