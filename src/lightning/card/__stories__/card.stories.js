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
  div.className = 'slds-p-around_medium';
  div.innerHTML = `
      <lightning-card title="Accounts">
          <lightning-button
              slot="actions"
              label="New"
              variant="neutral">
          </lightning-button>
          <p style="padding: 0 1rem">Anything can go into the card body</p>
          <span slot="footer">View All</span>
      </lightning-card>
    `;
  return div;
};
