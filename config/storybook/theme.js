import { create } from '@storybook/theming';
import pkg from '../../package.json';

const theme = create({
  brandTitle: `UN World Data Forum Components v${pkg.version}`,
  brandUrl: pkg.homepage,
});

export default theme;