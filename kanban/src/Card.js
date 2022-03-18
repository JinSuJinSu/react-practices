import React, {useState} from 'react'
import styles from './assets/css/Card.css'
import TaskList from './TaskList'

const Card = ({title, description, tasks}) => {
  const [showDetails, setShowDetails] = useState(false)

  function changeShowDatils(){
    setShowDetails(!showDetails)
  }

  return (
      <div className={styles.Card}>
          {
          showDetails?
          <div className={styles.Card__Title__is__open} onClick={changeShowDatils}>{title}</div> :
          <div className={styles.Card__Title} onClick={changeShowDatils}>{title}</div>
          }
          
          {showDetails? <div>{description}</div> : "" }
          {showDetails? <TaskList tasks={tasks}/> : "" }
          
      </div>
  )
}

export default Card