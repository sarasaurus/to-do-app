import React from 'react';
import uuid from 'uuid';
import autoBind from './../../utils/';
import '../../../styles/main.scss';
import PropTypes from 'prop-types'
export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
  // this is UI state-- I'm only using it to SEE these things-- can be anywhere
    this.state = {
      title: '',
      content: '',
      id: uuid(),
      createdOn: '',
    };
    autoBind.call(this, NoteForm);
  }
  // --------------------------------------------------------------------------------------
  // developer created funcitons-- MEMBER FUNCTIONS
  // --------------------------------------------------------------------------------------
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      id: uuid(),
      createdOn: new Date(),
    });
      // here we're calling handleAddNotes, we are ASSUMING that it exists...
    this.props.handleAddNote(this.state);
  }
  // remember that [name] is just bracket notation-- bracket accomodates special characters in a string
  handleChange(event) {
    const { name, value } = event.target; 
    this.setState({
      [name]: value, 
    });
  }
  // --------------------------------------------------------------------------------------
  // LIFECYCLE HOOKS
  // --------------------------------------------------------------------------------------
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="content"
          placeholder="content"
          value={this.state.content}
          onChange={this.handleChange}/>
          <button type="submit">create note</button>
      </form>
    );
  }
  // adding from class:
  // NoteForm.PropTypes = {
  //   handleAddNote: PropTypes.func,
  // };
}
