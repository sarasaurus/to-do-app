import React from 'react';
import '../../../styles/main.scss';

export default function NoteList(props) {
  return (
    <ul>
      {
        props.notes.map((note) => {
          return (
            <li key={note.id}>
            {note.title}: {note.content}
          </li>
          );
        })
      }
    </ul>
  );
}

