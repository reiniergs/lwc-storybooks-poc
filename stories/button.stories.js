import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Button from 'c/button';

buildAndRegisterCustomElement('c-button', Button);

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


   
