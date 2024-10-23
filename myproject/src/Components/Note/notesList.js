import React, { useState } from 'react';
import Note from './note';

function NotesList() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Notatka 1', description: 'Opis notatki 1' },
    { id: 2, title: 'Notatka 2', description: 'Opis notatki 2' },
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
    <div>
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