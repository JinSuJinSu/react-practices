import React, { useRef } from 'react';
import styles from './assets/css/TaskList.css';
import Task from './Task';


const TaskList = ({tasks, callback, cardNo, taskDelete, checkboxUpdate}) => {

  const refForm = useRef(null);

  return (
    <div className={styles.TaskList}>
        <ul>
            {tasks.map(task => <Task
                                    key={task.no}
                                    name={task.name}
                                    done={task.done}
                                    no={task.no} 
                                    taskDelete={taskDelete}
                                    checkboxUpdate={checkboxUpdate}/> )}

            <form  ref={refForm}>
                <input
                  type='text' name="name"
                  className={styles.TaskList__add_task}
                  placeholder={'태스크 추가'}
                  onKeyPress={e => {
                    if(e.key === 'Enter') {
                      e.preventDefault();
                    try{
                    const newTask = {
                      name:e.target.value,
                      done:"Y",
                      cardNo:cardNo
                      
                    }
                    callback(newTask);
                    refForm.current.reset();
                  }
                    catch(err){
                      console.log(err.message);
                  }
                }}}/>   
            </form>
        </ul>
    </div>     
  );
}

export default TaskList