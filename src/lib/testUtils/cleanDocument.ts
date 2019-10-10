/**
 * The jsdom instance is shared across test cases in a single file so reset the DOM
 * recommended by the docs: https://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.unit_testing_using_jest_create_tests
 */
export default function cleanDocument() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
}
