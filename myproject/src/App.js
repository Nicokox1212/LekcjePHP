import React from 'react';
import NotesList from './Components/Note/notesList';
import styles from './Components/Note/styles.module.css';  

function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Wyśrodkowany tytuł "Moje Notatki" */}
      <h1 className={styles.pageTitle}>Moje Notatki</h1>  {/* Używamy CSS Modules */}
      <NotesList />
    </div>
  );
}

export default App;
