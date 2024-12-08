import React, { useState } from 'react';
import Note from './note';
import styles from './styles.module.css';

function NotesList() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Uwaga dla ucznia Nicola Allocca', description: 'Uczeń zachowywał się chamsko wobec nauczyciela.' },
    { id: 2, title: 'Notatka 2', description: 'Opis notatki 2' },
    { id: 3, title: 'Notatka 3', description: 'Opis notatki 3' },
    { id: 4, title: 'Notatka 4', description: 'Opis notatki 4' },
    { id: 5, title: 'Notatka 5', description: 'Opis notatki 5' },
    
    


  ]);

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEdit = (id, newTitle, newDescription) => {
    setNotes(
      notes.map(note => 
        note.id === id ? { ...note, title: newTitle, description: newDescription } : note
      )
    );
  };

  return (
    <div className={styles.notesListContainer}>
      {notes.map(note => (
        <Note 
          key={note.id} 
          note={note} 
          onDelete={() => handleDelete(note.id)} 
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default NotesList;