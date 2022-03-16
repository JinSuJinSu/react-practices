import React from 'react'
import CardList from './CardList'
import styles from './assets/css/Kanbanboard.css'
import cards from './data.json'

const Kanbanboard = () => {
  // const result = [0, 1, 2, 3, 4].filter(e=>e%2===0)
  // console.log(result)
  return (
    <div className={styles.KanbanBoard}>
      <CardList key={0} title={'ToDo'} cards={cards.filter(e => e.status === 'ToDo')} />
      <CardList key={1} title={'Doing'} cards={cards.filter(e => e.status === 'Doing')} />
      <CardList key={2} title={'Done'} cards={cards.filter(e => e.status === 'Done')} />
    </div>
  )
}

export default Kanbanboard