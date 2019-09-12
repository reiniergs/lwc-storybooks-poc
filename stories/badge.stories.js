import { storiesOf } from '@storybook/html';
import { buildCustomElementConstructor } from '@lwc/engine';
import Badge from 'lightning/badge';

const BadgeCustomElement = buildCustomElementConstructor(Badge);
customElements.define('lightning-badge', BadgeCustomElement)

storiesOf('Badge', module)
    .add('default', () => `
        <lightning-badge label="Default"><lightning-badge>
    `)
    .add('inverse', () => `
        <lightning-badge variant="inverse" label="Inverse"><lightning-badge>
    `)
    .add('lightest', () => `
        <lightning-badge variant="lightest" label="Lightest"><lightning-badge>
    `);
