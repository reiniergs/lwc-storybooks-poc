import { configure } from '@storybook/html';
import '!style-loader!css-loader!@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import '../src';

configure(require.context('../src', true, /\.stories\.ts$/), module);
