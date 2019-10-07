import { LightningElement, api } from 'lwc';

export default class LightningCard extends LightningElement {
    @api title;

    renderedCallback() {
        const footerWrapper = this.template.querySelector('.slds-card__footer');
        const hasFooterContent = this.querySelector('[slot="footer"]');
        
        if (!hasFooterContent) {
            if (footerWrapper.remove) {
                footerWrapper.remove();
            } else if (footerWrapper.parentNode) {
                // IE11 doesn't support remove. https://caniuse.com/#feat=childnode-remove
                // TODO: remove when lwc can polyfill node.remove.
                footerWrapper.parentNode.removeChild(footerWrapper);
            }
        }
    }

    get hasStringTitle() {
        return !!(this.title && typeof this.title === 'string');
    }
}
