import type { StorybookConfig } from '@storybook/core-common';

export const addons: StorybookConfig['addons'] = [
  '@storybook/renderer-web-components',
  require.resolve('./framework-preset-web-components'),
];
