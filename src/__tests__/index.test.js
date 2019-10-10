import mockCustomElements from 'lib/testUtils/mockCustomElements';

describe('index', () => {
  it('defines our custom components', () => {
    mockCustomElements(() => {
      require('../index');
      expect(Object.keys(window.customElements.elements)).toEqual(['th-card']);
    });
  });
});
