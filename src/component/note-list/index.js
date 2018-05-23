import React from 'react';
import '../../../styles/main.scss';

export default function NoteList(props) {
  return (
    <ul>
      {
        props.notes.map((note) => {
          return (
            <li key={note.id}>
                <h1>{note.title}</h1>
              <h3>{note.id}</h3>
              <p>{note.content}</p>
          </li>
          );
        })
      }
    </ul>
  );
}
