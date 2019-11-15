import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Badge from 'c/badge';

buildAndRegisterCustomElement('c-badge', Badge);

storiesOf('Badge', module)
    .add('default', () => `
        <div class="slds-p-around_medium">
            <c-badge label="Default"><c-badge>
        </div>    
    `)
    .add('inverse', () => `
        <div class="slds-p-around_medium">
            <c-badge variant="inverse" label="Inverse"><c-badge>
        </div>    
    `)
    .add('lightest', () => `
        <div class="slds-p-around_medium">
            <c-badge variant="lightest" label="Lightest"><c-badge>
        </div>    
    `);    
