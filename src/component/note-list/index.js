import React from 'react';
import '../../../styles/main.scss';



export default renderNoteList = (notes) => {
  render (){
    return (
      <ul>
        {
           notes.map((note) => {
            return (
              <li key={note.id}>
              {note.title}: ${note.content}
            </li>
            );
          })
        }
      </ul>
    );
  }
};

