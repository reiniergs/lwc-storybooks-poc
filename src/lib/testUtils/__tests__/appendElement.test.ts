import appendElement from '../appendElement';
import cleanDocument from '../cleanDocument';
// @ts-ignore
import Card from 'th/card';

describe('appendElement', () => {
  afterEach(cleanDocument);

  it('adds the attributes to the component', () => {
    const el = appendElement('th-card', Card, { title: 'foo' });
    expect(el.title).toBe('foo');
  });

  it('adds element to the DOM', () => {
    appendElement('th-card', Card);
    expect(document.body.querySelector('th-card')).toBeTruthy();
  });
});
