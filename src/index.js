import '@lwc/synthetic-shadow';
import { buildCustomElementConstructor } from 'lwc';

import Card from 'lightning/card';

const lightningCard = buildCustomElementConstructor(Card);

customElements.define('lightning-card', lightningCard);
