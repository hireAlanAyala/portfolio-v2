import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://hirealanayala.com/icon.svg',
    brandTitle: 'Alan Ayala Components',
    brandUrl: 'https://hirealanayala.com',
  },
});
