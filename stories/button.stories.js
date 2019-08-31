import { storiesOf } from '@storybook/html';
import { createElement } from '@lwc/engine';
import Button from 'lightning/button';

storiesOf('Button', module)
    .add('base', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Button';
        button.onclick = () => alert('base button clicked');
        return button;
    })
    .add('neutral', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Neutral Button';
        button.onclick = () => alert('neutral button clicked');
        button.variant = 'neutral';
        return button;
    })
    .add('brand', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Brand Button';
        button.onclick = () => alert('brand button clicked');
        button.variant = 'brand';
        return button;
    })
    .add('destructive', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Destructive Button';
        button.onclick = () => alert('destructive button clicked');
        button.variant = 'destructive';
        return button;
    })
    .add('success', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Success Button';
        button.onclick = () => alert('success button clicked');
        button.variant = 'success';
        return button;
    })
    .add('disabled', () => {
        const button = createElement('lightning-button', { is: Button });
        button.label = 'Disabled Button';
        button.variant = 'neutral';
        button.disabled = true;
        return button;
    });
