import { useState } from 'react';
import './App.css';
import TodoList from './Todo/components/TodoList/TodoList';
import Header from './Todo/components/Header/Header';
import { DarkModeProvider } from './Todo/context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

