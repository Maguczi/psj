import React from 'react'
import styles from './NotFound.module.scss'

const notFound = () => {
  console.log('Component %c"notFound"', 'color: green', 'loaded');

  return <article>
    <h1 className={styles.title}>404 Not Found</h1>
  </article>
}

export default notFound
