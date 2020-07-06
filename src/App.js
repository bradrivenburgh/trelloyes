import React from 'react';
import './App.css';
import List from './List'; //Import List component

class App extends React.Component {
  static defaultProps = { //Blank state of app
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props; //Create store variable for readability
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => ( //Generate a list for each item in the store.list array
            <List
              key={list.id} //Generate a key that corresponds to the list id
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])} //Create an array of card objects by iterating through the cardsId array and for each get the matching card with that id in the allCards object.
            />            
          ))}
        </div>  
      </main>  
    );  
  }
}


export default App;
