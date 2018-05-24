import React from 'react';
import NoteForm from './../note-form/';
import NoteItem from './../note-item';
import NoteList from './../note-list';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import autoBind from '../../utils';

// TODO: this component will manage state of the entire app
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };
    autoBind.call(this, Dashboard);
  }
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
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id),
      error: null,
    });
    console.log('delete', this.state);
  }
  render() {
    return (
    <section className="dashboard">
    <h1>To-Do App Dashboard</h1>
    <NoteForm handleAddNote={this.handleAddNote}/>
    { this.state.error && <h2 className="error">You must enter a title.</h2> }
    {/* <NoteItem handleRemoveNote={this.handleRemoveNote}/> */}
    <NoteList notes={this.state.notes} handleRemove={this.handleRemove} />
    </section>
    );
  }
}
