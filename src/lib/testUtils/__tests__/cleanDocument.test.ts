import appendElement from '../appendElement';
import cleanDocument from '../cleanDocument';
// @ts-ignore
import Card from 'lightning/card';

describe('cleanDocument', () => {
  it('removes all elements from the DOM', () => {
    appendElement('lightning-card', Card);
    appendElement('lightning-card', Card);

    const cards = document.body.querySelectorAll('lightning-card');
    expect(cards.length).toBe(2);

    cleanDocument();

    const cards2 = document.body.querySelectorAll('lightning-card');
    expect(cards2.length).toBe(0);
  });
});
