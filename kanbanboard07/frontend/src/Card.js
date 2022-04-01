import React, {useState, useEffect} from 'react'
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

const Card = ({no, title, description}) => {
  const[tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const showTasks = async function(no) {
    try{
      const response = await fetch(`/api/task?cardNo=${no}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: null
    });

    console.log(response)

    if(!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }

    const json = await response.json();

    if(json.result !== 'success') {
      throw new Error(`${json.result} ${json.message}`)    
    }
    
    setTasks(json.data);

  } catch(err){
    console.log(err);
  }
}

  const taskAdd = async function(task) {
      try{
        const response = await fetch(`/api/task`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }

      const json = await response.json();

      if(json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`)    
      }
      setTasks([task, ...tasks]);

    } catch(err){
      console.log(err);
    }
  }

  const taskDelete = async function(no) {
    try{
      const response = await fetch(`/api/task?taskNo=${no}`, {
      method: 'delete',
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
    setTasks(tasks.filter((task,index)=>index!=no));

  } catch(err){
    console.log(err);
  }
  }

  const checkboxUpdate = async function(no, done) {
    try{
      const response = await fetch(`/api/task?taskNo=${no}&originDone=${done}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: `done=${done}`
    });

    if(!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    const json = await response.json();

    if(json.result !== 'success') {
      throw new Error(`${json.result} ${json.message}`)    
    }
    
  } catch(err){
    console.log(err);
  }
  }
  
  return (
    <div className={styles.Card}>
        <div
          className={showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title}
          onClick={() => {
            console.log(`fecth task(/api/task?cardNo=${no}...`);
            setShowDetails(!showDetails);
            showTasks(no);
          }}>
          {title}
        </div>
        {
          showDetails ? 
            <div className={styles.Card__Details}>
              {description}
              <TaskList tasks={tasks} callback={taskAdd} cardNo={no} 
              taskDelete={taskDelete} checkboxUpdate={checkboxUpdate}/>
            </div> :
            null
        }
    </div>
  )
}

export default Card;