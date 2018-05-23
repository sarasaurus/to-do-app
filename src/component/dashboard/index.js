import React from 'react';
import uuid from 'uuid';
import NoteForm from './../note-form/';
import autoBind from '../../utils';

// TODO: this component will manage state of the entire app
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };
    autoBind.call(this, Dashboard);// this enables all my handle methods to be bound automatically-- looking for the 'handle' then automatically binding the
  }
  // remember expense will be passed in via the previous function expense-form, so see expense-form index.js file here we are adding two new properties to our expense form--- .createdOn and .id are now two dynamically created properties! OMG so confusing
  // expense is the state of the expense-form component, dashboard is direct parent of expense-form
  // so here we are checking to make sure we got what we needed from the expense state we pass in
  handleAddNote(note) {
    if (note.title === '') {
      return this.setState({ error: true });
    }
    note.createdOn = new Date();
    note.id = uuid();
    // when we pass the previousState in, it allows us to add to the previous state-- so say previous state was 1, we can now add new input to it-- REACT is immutable so we make copies, not .push, see the spread oprtr
    // here prefivious state is the previous state of the expense-form child which we pass in
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note], 
        error: null, // spread operater will create a copy of previous array and adding the new expense and return the new array-- like an immutable version of  push
        // expenses holds objecst representing the new state of our expense-form component
      };
    });
  }
  handleRemoveNote(noteToRemove) {
    this.state.notes.filter((note) => note.id === noteToRemove.id);
  }
  handleNotesList() {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
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
  render() {
    return (
    <section className="dashboard">
    <h1>To-Do App Dashboard</h1>
    <NoteForm handleAddNote={this.handleAddNote}/>
    { this.state.error && <h2 className="error">You must enter a title.</h2> }
    { this.handleNotesList() }
    <p> remove a note here somehow</p>
    </section>
    );
  }
}
