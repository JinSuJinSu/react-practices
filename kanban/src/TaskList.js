import React from 'react'
import styles from './assets/css/TaskList.css'

const TaskList = ({tasks}) => {
  return (
    <div className={styles.TaskList}>
        <ul>
        {tasks.map((e,i) => {
            return (<li key={i} className={styles.TaskList__Task}>
              <input type='checkbox' checked={e.done} />
              {e.name}
              <a href='#' className={styles.TaskList__Task__remove}></a>
              </li>)
        })
        }
        </ul>
    </div>
  )
}

export default TaskList