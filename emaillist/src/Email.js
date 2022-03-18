import React from 'react'
import styles from './assets/scss/Email.scss'

const Email = ({name,email}) => {
  return (
    <li className={styles.Email}>
        <h4>{name}</h4>
        <br/>
        <span>{email}</span>
    </li>
  )
}

export default Email