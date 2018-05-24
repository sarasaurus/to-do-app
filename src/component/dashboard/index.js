import React from 'react';
import NoteForm from './../note-form/';
import NoteList from './../note-list';
import autoBind from '../../utils';
import '../../../styles/main.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // this is APPLICATION state -- should be in minimal places, ie right here, one place
    // soon we will move this to REDUX, sometimes its not obvious UI vs APP, but is ok
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
  // this function affects the app state -- therefore this function should go here
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
  // --------------------------------------------------------------------------------------
  // LIFE CYCLE HOOKS
  /* These will be things like React provided functions-- the  */
  // --------------------------------------------------------------------------------------
  render() {
    return (
    <section className="dashboard">
    <h1>To-Do App Dashboard</h1>
    <NoteForm handleAddNote={this.handleAddNote}/>
    { this.state.error && <h2 className="error">You must enter a title.</h2> }
    <NoteList notes={this.state.notes} handleRemove={this.handleRemove} />
    </section>
    );
  }
}
