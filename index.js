import { createElement } from '@lwc/engine';
import App from 'lightning/badge';

document.getElementById('main')
    .appendChild(createElement('my-app', { is: App }));
