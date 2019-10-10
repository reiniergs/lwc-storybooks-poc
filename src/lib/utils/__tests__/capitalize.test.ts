import capitalize from '../capitalize';

describe('capitalize', () => {
  it('capitalizes words', () => {
    expect(capitalize('foo')).toBe('FOO');
  });
});
