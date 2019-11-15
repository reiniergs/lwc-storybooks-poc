import { buildCustomElementConstructor } from 'lwc';

export default function buildAndRegisterCustomElement(elementName, elementClass) {
    if (!customElements.get(elementName)) {
        const customElement = buildCustomElementConstructor(elementClass);
        customElements.define(elementName, customElement);
    }
}

