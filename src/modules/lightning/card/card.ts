import { LightningElement, api } from 'lwc';

export default class LightningCard extends LightningElement {
    @api title!: string;

    renderedCallback() {
        const footerWrapper = this.template.host.querySelector('.slds-card__footer');
        const hasFooterContent = this.querySelector('[slot="footer"]');

        if (!hasFooterContent) {
            if (footerWrapper && footerWrapper.remove) {
                footerWrapper.remove();
            } else if (footerWrapper && footerWrapper.parentNode) {
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
