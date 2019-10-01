import { document } from 'global';
import { buildCustomElementConstructor } from '@lwc/engine';
import Card from 'lightning/card';

const cardCustomElement = buildCustomElementConstructor(Card);
customElements.define('lightning-card', cardCustomElement);

export default {
    title: 'Card'
};

export const basic = () => {
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="slds-p-around_medium">
            <lightning-card title="Accounts">
                <lightning-button
                    slot="actions"
                    label="New"
                    variant="neutral">
                </lightning-button>
                <p style="padding: 0 1rem">Anything can go into the card body</p>
                <span slot="footer">View All</span>
            </lightning-card>
        <div class="slds-p-around_medium">
    `;
    return div;
};
