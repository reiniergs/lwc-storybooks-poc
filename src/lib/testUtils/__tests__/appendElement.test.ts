import appendElement from '../appendElement';
import cleanDocument from '../cleanDocument';
// @ts-ignore
import Card from 'lightning/card';

describe('appendElement', () => {
  afterEach(cleanDocument);

  it('adds the attributes to the component', () => {
    const el = appendElement('lightning-card', Card, { title: 'foo' });
    expect(el.title).toBe('foo');
  });

  it('adds element to the DOM', () => {
    appendElement('lightning-card', Card);
    expect(document.body.querySelector('lightning-card')).toBeTruthy();
  });
});
