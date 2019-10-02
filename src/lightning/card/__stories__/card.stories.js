import { document } from 'global';

export default {
  title: 'Card'
};

export const basic = () => {
  const div = document.createElement('div');
  div.className = 'slds-p-around_medium';
  div.innerHTML = `
    <lightning-card title="Accounts">
      <button slot="actions">New</button>
      <p style="padding: 0 1rem">Anything can go into the card body</p>
      <span slot="footer">View All</span>
    </lightning-card>
  `;
  return div;
};
