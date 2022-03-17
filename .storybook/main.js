module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: {
      name: 'webpack5',
      options: {
        // fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  features: {
    storyStoreV7: true,
  },
  webpackFinal: (config) => ({ ...config, experiments: { lazyCompilation: { entries: false } } }),
};
