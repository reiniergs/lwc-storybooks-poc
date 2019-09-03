import { LightningElement, api } from 'lwc';
import classnames from 'classnames'

export default class LightningButton extends LightningElement {
    @api label;

    @api disabled;

    @api type = 'button';

    @api variant;

    get computedClass() {
        return classnames('slds-button', {
            'slds-button_neutral': this.variant === 'neutral',
            'slds-button_brand': this.variant === 'brand',
            'slds-button_outline-brand': this.variant === 'outline-brand',
            'slds-button_inverse': this.variant === 'inverse',
            'slds-button_destructive': this.variant === 'destructive',
            'slds-button_success': this.variant === 'success',
        });
    }

    /**
     * Sets focus on the button.
     */
    @api
    focus() {
        this.template.querySelector('button').focus();
    }
}
