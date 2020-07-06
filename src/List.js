import React from 'react';
import Card from './Card'
import './List.css';

function List(props) {
    return (
        <section className='List'>
          <header className='List-header'>
            <h2>{props.header}</h2>
          </header>
          <div className='List-cards'>
            {props.cards.map((card) => //Iterate through the cards prop passed from App
              <Card //For each card, pass a key, title, and content prop to Card
                key={card.id}
                title={card.title} 
                content={card.content}
              />
            )}
            <button
              type='button'
              className='List-add-button'
            >
              + Add Random Card
            </button>
          </div>
        </section>
      );
}

export default List;