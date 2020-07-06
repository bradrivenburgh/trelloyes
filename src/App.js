import React from 'react';
import './App.css';
import Card from './Card';
import List from './List';


function App(props) {
  return (
    <main className='App'>
      <header>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        <List header={props.store.lists[0].header}>
          <Card title={props.store.allCards.title} content={props.store.allCards.content} />
        </List>
      </div>  
    </main>  
  );
}

export default App;
