import { buildCustomElementConstructor } from '@lwc/engine';

import Card from 'lightning/card';

const lightningCard = buildCustomElementConstructor(Card);

customElements.define('lightning-card', lightningCard);
