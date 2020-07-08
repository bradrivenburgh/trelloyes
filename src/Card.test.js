import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import STORE from './store';
import renderer from 'react-test-renderer'

describe('Card component', () => {
    const store = STORE;
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer
            .create(<Card 
                key={store.allCards.a.id}
                title={store.allCards.a.title}
                content={store.allCards.a.content}
                />)
            .toJSON();
            expect(tree).toMatchSnapshot();
    });
});