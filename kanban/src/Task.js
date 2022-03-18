import React, {useState} from 'react'
import styles from './assets/css/TaskList.css'


const Task = ({name, done}) => {

  const [isChecked, setIsChecked] = useState(done)

  function changeIsChecked(){
    setIsChecked(!isChecked)
  }

  return (
    <li className={styles.TaskList__Task}>
        <input type='checkbox' checked={isChecked} onClick={changeIsChecked}/>
        {name}
        <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
  );
}

export default Task;