import React from 'react';
import NoteForm from './../note-form/';
import NoteList from './../note-list';
import autoBind from '../../utils';
import '../../../styles/main.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      error: null,
    };
    autoBind.call(this, Dashboard);
  }
  // --------------------------------------------------------------------------------------
  // developer created funcitons-- MEMBER FUNCTIONS
  // --------------------------------------------------------------------------------------
  handleAddNote(note) {
    if (note.title === '') {
      return this.setState({ error: true });
    }
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note], 
        error: null,
      };
    });
  }

  handleRemove(id) {
    if (!id) {
      return this.setState({ error: true });
    }
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note.id !== id),
        error: null,
      };
    });
  }
 
  handleUpdateNote(noteToUpdate) {
    if (!noteToUpdate) {
      return this.setState({ error: true });
    }
    this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => (note.id === noteToUpdate.id ? noteToUpdate : note)),
        error: null,
      };
    });
  }


  // --------------------------------------------------------------------------------------
  // LIFE CYCLE HOOKS
  // --------------------------------------------------------------------------------------
  render() {
    return (
    <section className="dashboard">
    <h1>To-Do App Dashboard</h1>
    <NoteForm handleAddNote={this.handleAddNote} />
    { this.state.error && <h2 className="error">You must enter a title.</h2> }
    <NoteList notes={this.state.notes} handleRemove={this.handleRemove} handleUpdateNote={this.handleUpdateNote} />
    </section>
    );
  }
}

// note DO NOT CALL FUNCITONS WHEN ADDING--- that will attach the return of the funciton-- not function itself