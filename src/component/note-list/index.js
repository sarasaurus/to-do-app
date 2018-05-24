import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../../../styles/main.scss';
import NoteItem from './../note-item';


export default class NoteList extends React.Component {

  render() {
    console.log(this.props);
    return (
      <section className="note-list">
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
  // NoteItem.PropTypes = {
  //   note: PropTypes.object,
  // };
}

// noteItem expense=expense--- this should automatically grab the props