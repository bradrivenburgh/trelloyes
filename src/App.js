import React from 'react';
import './App.css';
import Card from './Card';
import List from './List';
import STORE from './store';


function App(props) {
  return (
    <main className='App'>
      <header>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        <List header={STORE.lists.header}>
          <Card title={STORE.allCards.title} content={STORE.allCards.content} />
        </List>
      </div>  
    </main>  
  );
}

export default App;
