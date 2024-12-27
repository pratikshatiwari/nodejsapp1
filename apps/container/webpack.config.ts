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

    config.module = {
      ...config.module,
      rules: [
        ...(config.module?.rules || []), 
        {
          test: /\.(mp4|webm|ogg|avi)$/i,
          type: 'asset/resource', 
          generator: {
            filename: 'static/media/[name].[hash][ext]', 
          },
        },
      ],
    };

    return config;
  }
);
