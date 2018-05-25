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
    // venicio passes in the previous state and returns the new state-- because setState is ASYNC-- if you want to runs something as soon as the state changes you'd need to pass a second callback to setstate... here previousState is ensuring we are grabbing the state we want here
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note.id !== id),
        error: null,
      };
      // vinivios' lecture code puts the note-list logic here
    });
    console.log('delete', this.state);
  }
  // update just one slot of the array, .map
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
    console.log('delete', this.state);
  }


  // --------------------------------------------------------------------------------------
  // LIFE CYCLE HOOKS
  /* These will be things like React provided functions-- the  */
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
// note DO NOT CALL FUNCITONS WHEN ADDING--- that will attach the return of the funciton-- not funciton itself