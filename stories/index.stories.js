import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { createElement } from '@lwc/engine';
import Badge from 'lightning/badge';

storiesOf('Badge', module)
  .add('basic', () => {
    const badge = createElement('lightning-badge', { is: Badge });
    badge.label = "Hello World!"
    return badge;
  })  
