import WithoutFooter from 'modules/th/card/__stories__/withoutFooter/withoutFooter';
import example from '../example';
import mockCustomElements from 'lib/testUtils/mockCustomElements';

const mockedModule = { id: './src/modules/th/card' };

describe('example', () => {
  it('generates an example story for the component', () => {
    mockCustomElements(() => {
      const story = example(mockedModule, WithoutFooter);
      const storyTag = story.querySelector('stories-th-card-without-footer');
      expect(storyTag).toBeTruthy();
    });
  });
});
