import '@lwc/synthetic-shadow';
import { buildCustomElementConstructor } from 'lwc';

import Card from 'th/card';

const thCard = buildCustomElementConstructor(Card);

customElements.define('th-card', thCard);
