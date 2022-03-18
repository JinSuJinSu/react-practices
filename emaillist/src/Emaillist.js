import React, { Fragment } from 'react'
import styles from './assets/scss/Emaillist.scss'
import Email from './Email'

const Emaillist = ({emalis}) => {
  return (
        <ul className={styles.Emaillist}>
            {emalis.map(data=><Email name={data.firstName+data.lastName} email={data.email}/>)}
        </ul>
  )
}

export default Emaillist