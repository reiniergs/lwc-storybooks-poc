import mockCustomElements from '../mockCustomElements';

describe('mockCustomElements', () => {
  it('runs your block with a simple mock for customElements', () => {
    mockCustomElements(() => {
      const foo = () => {};
      window.customElements.define('x-foo', foo);
      expect(window.customElements.get('x-foo')).toBe(foo);
    });
  });
});
