import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { createElement } from '@lwc/engine';
import Badge from 'lightning/badge';

storiesOf('Badge', module)
    .add('default', () => {
        const badge = createElement('lightning-badge', { is: Badge });
        badge.label = 'Default Badge';
        return badge;
    })
    .add('inverse', () => {
        const badge = createElement('lightning-badge', { is: Badge });
        badge.label = 'Inverse Badge';
        badge.variant = 'inverse';
        return badge;
    })
    .add('lightest', () => {
        const badge = createElement('lightning-badge', { is: Badge });
        badge.label = 'Lightest Badge';
        badge.variant = 'lightest';
        return badge;
    });
