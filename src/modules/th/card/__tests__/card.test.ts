// @ts-ignore
import Card from 'th/card';
import appendElement from 'lib/testUtils/appendElement';
import cleanDocument from 'lib/testUtils/cleanDocument';

describe('th-card', () => {
  afterEach(cleanDocument);

  it('capitalizes the title', () => {
    const el = appendElement('th-card', Card, { title: 'Foo' });
    const title = el.shadowRoot!.querySelector('.slds-text-heading_small');
    expect(title!.textContent).toBe('FOO');
  });
});
