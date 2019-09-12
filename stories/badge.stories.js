import { storiesOf } from '@storybook/html';
import { buildCustomElementConstructor } from '@lwc/engine';
import Badge from 'lightning/badge';

const BadgeCustomElement = buildCustomElementConstructor(Badge);
customElements.define('lightning-badge', BadgeCustomElement)

storiesOf('Badge', module)
    .add('default', () => `
        <div class="slds-p-around_medium">
            <lightning-badge label="Default"><lightning-badge>
        </div>    
    `)
    .add('inverse', () => `
        <div class="slds-p-around_medium">
            <lightning-badge variant="inverse" label="Inverse"><lightning-badge>
        </div>    
    `)
    .add('lightest', () => `
        <div class="slds-p-around_medium">
            <lightning-badge variant="lightest" label="Lightest"><lightning-badge>
        </div>    
    `);
