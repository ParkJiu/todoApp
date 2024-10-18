import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css'
import AddTodo from '../AddTodo/AddTodo';
import Todo from './Todo';

export default function TodoList({filter}) {
/**
 * 함수 자체를 계속 호출해서 반환된 값을 전달하는 대신, 콜백함수를 전달 
 * => 함수를 아무리 많이 만들어서 전달해도 내부적으로 갖고 있는 상태가 있다면 초깃값이 필요하지 않으므로 초깃값을 들고 있는 함수를 반환하지 않음
 */
  const [todoList, setTodoList] = useState(readTodosFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const handleAdd = (todo) => setTodoList([...todoList, todo]);

  const handleDelete = (deleted) => setTodoList(todoList.filter(t => t.id !== deleted.id));

  const handleUpdate = (updated) => setTodoList(todoList.map(t => t.id === updated.id ? updated : t));

  const filtered = getFilteredItems(todoList, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
          {filtered.map((item) => (
            <Todo 
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              />
          ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
      </section>
  );
}

const getFilteredItems = (todoList, filter) => {
  if (filter === 'active') {
    return todoList.filter(todo => todo.status === 'active');
  } else if (filter === 'completed') {
    return todoList.filter(todo => todo.status === 'completed');
  } else {
    return todoList;
  }
}

function readTodosFromLocalStorage() {
  const todos = (localStorage.getItem('todos'));
  return todos ? JSON.parse(todos) : [];
} 
