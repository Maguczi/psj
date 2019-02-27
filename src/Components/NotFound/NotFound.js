import React from 'react'
import styles from './NotFound.module.scss'

const notFound = () => {
  console.log(styles);

  return <article>
    <h1 className={styles.title}>404 Not Found</h1>
  </article>
}

export default notFound
