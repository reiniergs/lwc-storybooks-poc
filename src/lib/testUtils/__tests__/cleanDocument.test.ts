import appendElement from '../appendElement';
import cleanDocument from '../cleanDocument';
// @ts-ignore
import Card from 'th/card';

describe('cleanDocument', () => {
  it('removes all elements from the DOM', () => {
    appendElement('th-card', Card);
    appendElement('th-card', Card);

    const cards = document.body.querySelectorAll('th-card');
    expect(cards.length).toBe(2);

    cleanDocument();

    const cards2 = document.body.querySelectorAll('th-card');
    expect(cards2.length).toBe(0);
  });
});
