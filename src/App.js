import React from 'react';
import './App.css';
import STORE from './store';
import List from './List'; //Import List component

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}


class App extends React.Component {
  // Convert to state
  state = {
    store: STORE,
  } 

  // Event handler to delete card
  handleDeleteCard = (cardID) => {
    const { lists, allCards } = this.state.store;
    console.log(cardID);
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardID)
    }));
    
    const newCards = omit(allCards, cardID);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards,
      }
    })
  }

  // Event handler to add random card
  handleAddCard = (listID) => {
    const newCard = newRandomCard();

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listID) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard,
        }
      }
    })
  
    console.log(listID, newCard, newLists)
     
  }

  render() {
    const { store } = this.state; //Create store variable for readability
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => ( //Generate a list for each item in the store.list array
            <List
              key={list.id} //Generate a key that corresponds to the list id
              listID={list.id}
              header={list.header}
              onDeleteCard={this.handleDeleteCard}
              onAddCard={this.handleAddCard}
              cards={list.cardIds.map(id => store.allCards[id])} //Create an array of card objects by iterating through the cardsId array and for each get the matching card with that id in the allCards object.
            />            
          ))}
        </div>  
      </main>  
    );  
  }
}


export default App;
