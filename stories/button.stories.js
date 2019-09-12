import { storiesOf } from '@storybook/html';
import { buildCustomElementConstructor, createElement } from '@lwc/engine';
import Button from 'lightning/button';

const buttonCustomElement = buildCustomElementConstructor(Button);
customElements.define('lightning-button', buttonCustomElement); 

storiesOf('Button', module)
    .add('base', () => `
        <div class="slds-p-around_medium">
            <lightning-button label="Base Button"><lightning-button>
        </div>    
    `)
    .add('neutral', () => `
        <div class="slds-p-around_medium">
            <lightning-button variant="neutral" label="Neutral Button"><lightning-button>
        </div>    
    `)
    .add('brand', () => `
        <div class="slds-p-around_medium">
            <lightning-button variant="brand" label="Brand Button"><lightning-button>
        </div>    
    `)
    .add('destructive', () => `
        <div class="slds-p-around_medium">
            <lightning-button variant="destructive" label="Destructive Button"><lightning-button>
        </div>    
    `)
    .add('success', () => `
        <div class="slds-p-around_medium">
            <lightning-button variant="success" label="Success Button"><lightning-button>
        </div>    
    `);
