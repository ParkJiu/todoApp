import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import styles from './TodoList.module.css';

export default function Todo({onUpdate, onDelete, todo}) {
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status});
  }

  const handleDelete = () => onDelete(todo);

  return (
    <div>
      <li key={todo.id} className={styles.todo}>
        <label htmlFor={todo.id} className={styles.text}>{todo.text}</label>
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.status === 'completed'}
          onChange={handleChange}
          className={styles.checkbox}
        />
        <FontAwesomeIcon className={styles.button} icon={faTrashAlt} onClick={handleDelete} />
      </li>
    </div>
  );
}

