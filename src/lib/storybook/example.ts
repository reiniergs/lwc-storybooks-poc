// @ts-ignore
import { buildCustomElementConstructor } from 'lwc';
import kebabCase from 'lodash/kebabCase';

interface StoryModule {
  id: string;
}

function buildStoryTag(module: StoryModule, componentClass: any) {
  const relativePath = module.id.split('./src/modules/').join('');
  const [namespaceName, className] = relativePath.split('/');
  const exampleName = kebabCase(componentClass.name);
  return ['stories', namespaceName, className, exampleName].join('-');
}

/**
 * Generates an example story for the given component
 * Auto-generates the story tag based on the component namespace, name, and example
 * For instance, if I have an example story for the lightning/card component called WithoutFooter,
 * I call it like this:
 * ```
 * // src/modules/lightning/card/__stories__/card.stories.ts
 * export const withoutFooter = () => example(module, WithoutFooter);
 * ```
 * and it will generate a custom tag for the story like this:
 * ```
 * <stories-lightning-card-without-footer>
 *   <lightning-card>
 *     ...
 *   </lightning-card>
 * </stories-lightning-card-without-footer>
 * ```
 */
export default function example(module: StoryModule, componentClass: any) {
  const div = document.createElement('div');
  div.className = 'slds-p-around_medium';

  const tag = buildStoryTag(module, componentClass);
  if (!customElements.get(tag)) {
    customElements.define(tag, buildCustomElementConstructor(componentClass));
  }
  const el = document.createElement(tag);

  div.appendChild(el);
  return div;
}
