import React, { useState } from 'react';
import styles from './AddTodo.module.css'
import { v4 as uuidv4 } from 'uuid'; // uuid import

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd({id: uuidv4(), text, status: 'active'});
    setText('');
  }
  return (
    <footer>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder='Add todo'
          value={text}
          onChange={handleChange} 
        />
        <button type='submit' className={styles.button}>Add</button>
      </form>
    </footer>
  );
}

