
import React from 'react';
import styles from './styles.module.css';



function Modal({ title, description, setTitle, setDescription, onSave, onClose }) {
    return (
      <div className={styles.modalOverlay}>
        {/* Rozmyte tło */}
        <div className={styles.modalBackground}></div>
  
        {/* Zawartość modalnego okna */}
        <div className={styles.modalContent}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit title"
            className={styles.modalInput}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Edit description"
            className={styles.modalTextarea}
          />
          <button onClick={onSave} className={styles.modalSaveButton}>Save</button>
          <button onClick={onClose} className={styles.modalCloseButton}>Cancel</button>
        </div>
      </div>
    );
  }
  
  export default Modal;
  