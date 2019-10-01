import { configure } from '@storybook/html';
import '!style-loader!css-loader!@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
