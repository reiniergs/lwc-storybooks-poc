import { createElement } from 'lwc';

/**
 * Creates an element with the given name, type, and props and adds it to the document
 */
export default function appendElement(
  name: string,
  type: any,
  props: object = {}
) {
  const element = createElement(name, { is: type });
  Object.entries(props).forEach(([key, value]) => {
    // @ts-ignore
    element[key] = value;
  });
  document.body.appendChild(element);
  return element;
}
