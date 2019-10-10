// @ts-ignore
import Card from 'lightning/card';
import appendElement from 'lib/testUtils/appendElement';
import cleanDocument from 'lib/testUtils/cleanDocument';

describe('lightning-card', () => {
  afterEach(cleanDocument);

  it('capitalizes the title', () => {
    const el = appendElement('lightning-card', Card, { title: 'Foo' });
    const title = el.shadowRoot!.querySelector('.slds-text-heading_small');
    expect(title!.textContent).toBe('FOO');
  });
});
