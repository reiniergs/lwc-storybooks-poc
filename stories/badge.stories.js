import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { createElement } from '@lwc/engine';
import { withKnobs, text } from '@storybook/addon-knobs';
import Badge from 'lightning/badge';

storiesOf('Badge', module)
    .addDecorator(withKnobs)
    .add('default', () => {
        const badge = createElement('lightning-badge', { is: Badge });
        badge.label = text('label', 'Default Badge');
        return badge;
    })
    .add('inverse', () => {
        const badge = createElement('lightning-badge', { is: Badge });
        badge.label = text('label', 'Inverse Badge');
        badge.variant = 'inverse';
        return badge;
    })
    .add('lightest', () => {
        const badge = createElement('lightning-badge', { is: Badge });
        badge.label = text('label', 'Lightest Badge');
        badge.variant = 'lightest';
        return badge;
    });
