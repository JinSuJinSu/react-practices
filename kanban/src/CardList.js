import React from 'react'
import styles from './assets/css/CardList.css'
import Card from './Card';

const CardList = ({title, cards}) => {
  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        <ul>
          {cards.map(e=>{
            return <Card key={e.no} title={e.title} description={e.description} tasks={e.tasks}/> 
          })}
        </ul>      
    </div>
  )
}

export default CardList