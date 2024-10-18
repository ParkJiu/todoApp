import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode(); // DarkMode Hook

  return (
    <header>
      <div className={styles.header}>
        <h1>TODO</h1>
          <button className={styles.darkModeBtn} onClick={toggleDarkMode}>
            {!darkMode && <FontAwesomeIcon icon={faSun}/>}
            {darkMode && <FontAwesomeIcon icon={faMoon}/>}
          </button>
      </div>
      <ul className={styles.filters}>
        {
          filters.map((value, index) => 
            <li key={index}>
              <button 
                className={`${styles.filter} ${filter === value && styles.selected}`}
                value={filter}
                onClick={() => onFilterChange(value)}>{value}</button>
            </li>
          )
        }
      </ul>
    </header>
  );
}

