import React, { useState } from 'react';
import Modal from './modal';
import styles from './styles.module.css';

function Note({ note, onDelete, onEdit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const handleSave = () => {
    onEdit(note.id, title, description);
    toggleModal();
  };

  return (
    <div className={styles.noteContainer}>
      <div className={styles.noteHeader}>
        <h2 className={styles.noteTitle} onClick={toggleExpand}>
          {note.title}
        </h2>
        <div className={styles.noteButtons}>
          <button onClick={toggleModal} className={styles.noteButtonEdit}>Edit</button>
          <button onClick={onDelete} className={styles.noteButtonDelete}>Delete</button>
        </div>
      </div>
      
      {isExpanded && (
        <p className={styles.noteDescription}>{note.description}</p>
      )}

      {isModalOpen && (
        <Modal
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          onSave={handleSave}
          onClose={toggleModal}
        />
      )}
    </div>
  );
}




export default Note;
