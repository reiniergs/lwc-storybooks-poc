import { storiesOf } from '@storybook/html';
import { buildCustomElementConstructor, createElement } from '@lwc/engine';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Button from 'lightning/button';

const buttonCustomElement = buildCustomElementConstructor(Button);
customElements.define('lightning-button', buttonCustomElement); 

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('base', () => `
        <lightning-button label="Base Button"><lightning-button>
    `)
    .add('neutral', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = text('label', 'Neutral Button');
        button.disabled = boolean('disabled', false);
        button.variant = 'neutral';
        button.addEventListener('click', () => alert('neutral button clicked'));
        return button;
    })
    .add('brand', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = text('label', 'Brand Button');
        button.disabled = boolean('disabled', false);
        button.variant = 'brand';
        button.addEventListener('click', () => alert('brand button clicked'));
        return button;
    })
    .add('destructive', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = text('label', 'Destructive Button');
        button.disabled = boolean('disabled', false);
        button.variant = 'destructive';
        button.addEventListener('click', () => alert('destructive button clicked'));
        return button;
    })
    .add('success', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = text('label', 'Success Button');
        button.disabled = boolean('disabled', false);
        button.variant = 'success';
        button.addEventListener('click', () => alert('success button clicked'));
        return button;
    });
