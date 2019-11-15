import { storiesOf } from '@storybook/html';
import { buildCustomElementConstructor, createElement } from '@lwc/engine';
import Button from 'c/button';

const buttonCustomElement = buildCustomElementConstructor(Button);
customElements.define('c-button', buttonCustomElement); 

storiesOf('Button', module)
    .add('base', () => `
        <div class="slds-p-around_medium">
            <c-button label="Base Button"><c-button>
        </div>    
    `)
    .add('neutral', () => `
        <div class="slds-p-around_medium">
            <c-button variant="neutral" label="Neutral Button"><c-button>
        </div>    
    `)
    .add('brand', () => `
        <div class="slds-p-around_medium">
            <c-button variant="brand" label="Brand Button"><c-button>
        </div>    
    `)
    .add('destructive', () => `
        <div class="slds-p-around_medium">
            <c-button variant="destructive" label="Destructive Button"><c-button>
        </div>    
    `)
    .add('success', () => `
        <div class="slds-p-around_medium">
            <c-button variant="success" label="Success Button"><c-button>
        </div>    
    `);


   
