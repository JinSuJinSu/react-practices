import React, { useState } from 'react';
import styles from './assets/css/TaskList.css'
import Task from './Task';

const TaskList = ({tasks}) => {

  const [isChecked, setIsChecked] = useState(true);

  const onChangIsChecked= function(e){
    setIsChecked(!isChecked)
 }

  return (
    <div className={styles.TaskList}>
        <ul>
            {tasks.map(task => <Task key={task.no} name={task.name} done={task.done} /> )}
        </ul>
    </div>
  )
}

export default TaskList