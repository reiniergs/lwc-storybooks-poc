import { storiesOf } from '@storybook/html';
import { buildCustomElementConstructor } from '@lwc/engine';
import Card from 'lightning/card';

const cardCustomElement = buildCustomElementConstructor(Card);
customElements.define('lightning-card', cardCustomElement); 

storiesOf('Card', module)
    .add('basic', () => `
        <lightning-card title="Accounts">
            <lightning-button
                slot="actions"
                label="New"
                variant="neutral">
            </lightning-button>
            <p style="padding: 0 1rem">Anything can go into the card body</p>
            <span slot="footer">View All</span>
        </lightning-card>
    `);
