import { storiesOf } from '@storybook/html';
import { createElement } from '@lwc/engine';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Button from 'lightning/button';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('base', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Button';
        button.addEventListener('click', () => alert('base button clicked'));
        button.disabled = boolean('disabled', false);
        return button;
    })
    .add('neutral', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Neutral Button';
        button.addEventListener('click', () => alert('neutral button clicked'));
        button.variant = 'neutral';
        button.disabled = boolean('disabled', false);
        return button;
    })
    .add('brand', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Brand Button';
        button.addEventListener('click', () => alert('brand button clicked'));
        button.variant = 'brand';
        button.disabled = boolean('disabled', false);
        return button;
    })
    .add('destructive', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Destructive Button';
        button.addEventListener('click', () => alert('destructive button clicked'));
        button.variant = 'destructive';
        button.disabled = boolean('disabled', false);
        return button;
    })
    .add('success', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Success Button';
        button.addEventListener('click', () => alert('success button clicked'));
        button.variant = 'success';
        button.disabled = boolean('disabled', false);
        return button;
    });
