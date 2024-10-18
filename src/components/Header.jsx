import React from 'react';
import styles from '../AppTodo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <h1>TODO</h1>
        <button>
          <FontAwesomeIcon icon={faSun} />
        </button>
      </div>
      <ul className={styles.tabs}>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </>
  );
}

