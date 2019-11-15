import { storiesOf } from '@storybook/html';
import { buildCustomElementConstructor } from 'lwc';
import Avatar from 'c/avatar';

const avatarCustomElement = buildCustomElementConstructor(Avatar);
customElements.define('c-avatar', avatarCustomElement);

storiesOf('Avatar', module)
    .add('with initials', () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <c-avatar initials="RG" fallback-icon-name="custom:custom92"></c-avatar>
        </div>    
    `)
    .add('with image', () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <c-avatar src="assets/images/avatar1.jpg"></c-avatar>
        </div>    
    `)
    .add('with icon', () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <c-avatar fallback-icon-name="standard:account"></c-avatar>
        </div>    
    `)
    .add('variants', () => `
        <div class="slds-p-around_medium slds-m-around_x-small slds-box slds-theme_default">
            <c-avatar variant="circle" src="assets/images/avatar1.jpg"></c-avatar>
            <c-avatar variant="square" src="assets/images/avatar1.jpg"></c-avatar>
        </div>    
    `);
   
