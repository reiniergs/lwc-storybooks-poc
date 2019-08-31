import { LightningElement, api } from 'lwc';
import classnames from 'classnames';

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

    @api variant = 'default';

    get computedClass() {
        return classnames('slds-badge', {
            'slds-badge_inverse': this.variant === 'inverse',
            'slds-badge_lightest': this.variant === 'lightest',
        });
    }
}
