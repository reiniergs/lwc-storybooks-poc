import Basic from './basic/basic';
import WithoutFooter from './withoutFooter/withoutFooter';
import example from 'lib/storybook/example';

export default {
  title: 'Card'
};

export const basic = () => example(module, Basic);

export const withoutFooter = () => example(module, WithoutFooter);
