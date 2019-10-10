import { configure } from '@storybook/html';
import '!style-loader!css-loader!@trailhead/styles/dist/assets/styles/index.css';
import '../src';

configure(require.context('../src', true, /\.stories\.ts$/), module);

document.querySelector('html').classList.add('tds-bg_sand');
