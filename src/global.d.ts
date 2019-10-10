declare module 'lwc' {
  declare interface ShadowRootTheGoodPart {
    querySelector(selector: String): Element | null;
  }

  declare function createElement(name: string, thing: object): HTMLElement;
}
