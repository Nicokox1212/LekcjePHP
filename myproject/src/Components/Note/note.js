import React, { useState } from 'react';
import styles from './styles.module.css'; 
function Note({ note, onDelete, onEdit }) {
  const [isOpen, setIsOpen] = useState(false);  
  const [isEditing, setIsEditing] = useState(false);  
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);


  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
    setIsOpen(true);  
  };

  const handleSave = () => {
    onEdit(note.id, title, description);
    setIsEditing(false);  
  };

  return (
    <div className={styles.noteContainer}>
      <div className={styles.noteHeader}>
        <h2 
          className={styles.noteTitle}
          onClick={() => setIsOpen(!isOpen)}  
        >
          {title}
        </h2>
        <div className={styles.noteButtons}>
          <button 
            onClick={toggleEdit}  
            className={styles.noteButtonEdit}
          >
            {isEditing ? 'Anuluj' : 'Edytuj'}
          </button>
          <button 
            onClick={onDelete} 
            className={styles.noteButtonDelete}
          >
            Usuń
          </button>
        </div>
      </div>

      {(isOpen || isEditing) && ( 
        <div className="mt-4">
          {isEditing ? (
            <div>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className={styles.noteInput}
              />
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                className={styles.noteInput}
              />
              <button 
                onClick={handleSave} 
                className={styles.noteButtonEdit}
              >
                Zapisz
              </button>
            </div>
          ) : (
            <p className={styles.noteDescription}>{description}</p> 
          )}
        </div>
      )}
    </div>
  );
}

export default Note;