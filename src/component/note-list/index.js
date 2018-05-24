import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../../../styles/main.scss';
import NoteItem from './../note-item';

export default class NoteList extends React.Component {

  render() {
    console.log(this.props);
    return (
      <section className="NoteList">
      {
        this.props.notes.map((note, index) => {
        return (
          <NoteItem 
          key= {index}
          title = {note.title}
          id={note.id}
          content={note.content}
          handleRemove={this.props.handleRemove}
           />
        );
      })
    }
    </section>
    );
  }
}
