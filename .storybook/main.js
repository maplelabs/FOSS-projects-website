module.exports = {
  stories: [
    // '../stories/**/*.stories.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  // module: {
  //   rules: [
  //     {
  //       test: /\.(ttf|eot|svg)$/,
  //       use: 'file-loader?name=[name].[ext]',
  //       exclude: /\.inline.svg$/,
  //     },
  //     {
  //       test: /\.inline.svg$/,
  //       use: 'svgr/webpack',
  //     },
  //   ],
  // },
  webpackFinal: async (config, { configType }) => {
    config.module.rules = config.module.rules.map((rule) =>
      rule.test.test('.svg') ? { ...rule, exclude: /\.svg$/ } : rule
    );

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
