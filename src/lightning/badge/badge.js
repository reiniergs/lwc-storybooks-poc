import { LightningElement, api } from 'lwc';

/**
 * Represents a label which holds a small amount of information, such as the
 * number of unread notifications.
 */
export default class LightningBadge extends LightningElement {
    /**
     * The text to be displayed inside the badge.
     *
     * @type {string}
     * @required
     */
    @api label;

    connectedCallback() {
        this.classList.add('slds-badge');
    }
}
