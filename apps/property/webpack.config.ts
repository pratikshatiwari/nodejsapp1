import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import baseConfig from './module-federation.config';

import { Configuration } from 'webpack';
interface CustomWebpackConfig extends Configuration {
  devServer?: {
    hot?: boolean;
    [key: string]: any;
  };
}

const moduleFederationConfig: ModuleFederationConfig = {
  ...baseConfig,
};

export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(moduleFederationConfig, { dts: false }),
  (config: CustomWebpackConfig) => {
    
    config.devServer = {
      ...config.devServer,
      hot: true,  
    };

    return config;
  }
);
