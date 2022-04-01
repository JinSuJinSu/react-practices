import React from 'react'
import CardList from './CardList'
import styles from './assets/css/Kanbanboard.css'
import { useState, useEffect } from 'react'
// import cards from './data.json'

const Kanbanboard = () => {
  
  const [cards, setCards] = useState([])

  useEffect(async () => {
      try{
          const response = await fetch('/api/card', {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: null
        });

        if(!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        const json = await response.json();
        if(json.result !== 'success') {
          throw new Error(`${json.result} ${json.message}`)    
        }
        setCards(json.data);
    } catch(err){
      console.log(err);
    }
  }, []);


  return (
    <div className={styles.KanbanBoard}>
      <CardList key={0} title={'ToDo'} cards={cards.filter(e => e.status === 'ToDo')} />
      <CardList key={1} title={'Doing'} cards={cards.filter(e => e.status === 'Doing')} />
      <CardList key={2} title={'Done'} cards={cards.filter(e => e.status === 'Done')} />
    </div>
  )
}

export default Kanbanboard