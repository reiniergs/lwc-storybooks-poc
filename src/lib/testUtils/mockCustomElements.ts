class MockCustomElements {
  elements: { [key: string]: any } = {};

  get: any = (tag: string) => this.elements[tag];

  define = (tag: string, el: any) => {
    this.elements[tag] = el;
  };
}

export default function mockCustomElements(block: Function) {
  const customElements = window.customElements;
  // @ts-ignore
  window.customElements = new MockCustomElements();
  block();
  window.customElements = customElements;
}
