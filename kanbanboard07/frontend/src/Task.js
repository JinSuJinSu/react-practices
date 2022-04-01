import React, {useState} from 'react'
import styles from './assets/css/Task.css';


const Task = ({name, done, taskDelete, no, checkboxUpdate}) => {

  const [isChecked, setIsChecked] = useState(done);

  function changeIsChecked(){
    if(isChecked==='Y'){
      setIsChecked('N');
    }
    else{
      setIsChecked('Y');
    }
    
  }

  return (
    <li className={styles.TaskList__Task}>
        <input
          type='checkbox'
          checked={isChecked === 'Y'}
          onClick={e=>{
            changeIsChecked()
            checkboxUpdate(no,isChecked)} 
          }
          />
        {name}
        <a href='#' className={styles.TaskList__Task__remove} onClick={e=>taskDelete(no)} ></a>
    </li>
  );
}

export default Task;