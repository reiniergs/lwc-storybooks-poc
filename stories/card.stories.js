import { storiesOf } from '@storybook/html';
import { createElement } from '@lwc/engine';
import { withKnobs } from '@storybook/addon-knobs';
import BaseCard from 'wrappers/baseCard'

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('basic', () => {
        const baseCard = createElement('base-card', { is: BaseCard });
        return baseCard;
    });
