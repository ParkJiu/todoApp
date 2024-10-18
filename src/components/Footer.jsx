import React from 'react';
import styles from '../AppTodo.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <input type="text" />
      <button>Add</button>
    </div>
  );
}

