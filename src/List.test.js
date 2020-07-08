import React from 'react';
import ReactDOM from 'react-dom';
import List from "./List";
import STORE from './store';
import renderer from 'react-test-renderer';

describe('List component', () => {
  const store = STORE;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        store.lists.map(list => (
            <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
            />
        ))
, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
        .create(
            store.lists.map(list => (
                <List
                key={list.id}
                header={list.header}
                cards={list.cardIds.map(id => store.allCards[id])}
                />
            ))
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
  });

});