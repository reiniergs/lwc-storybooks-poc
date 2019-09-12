import { configure } from '@storybook/html';
import '!style-loader!css-loader!@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
