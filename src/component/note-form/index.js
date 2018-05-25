import React from 'react';
import uuid from 'uuid';
import autoBind from './../../utils/';
import '../../../styles/main.scss';
import PropTypes from 'prop-types';

// TODO: refactor so can be used for updating a note and creating a note
/**
 * need to add the stae outside const emptyState {
 * }
 * 
 * now enote form will be able to do two things-- add a note and update a note
 * 
 */
const emptyState = {
   
  title: '',
  content: '',
  id: uuid(),
  createdOn: '',

};
export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note ? this.props.note : emptyState;
    // this is UI state-- I'm only using it to SEE these things-- can be anywhere
    // this.state = {
    //   title: '',
    //   content: '',
    //   id: uuid(),
    //   createdOn: '',
    // };
    autoBind.call(this, NoteForm);
  } 
  
  // / vinicio takes this out of our funciton and pusts it outside our component
  // --------------------------------------------------------------------------------------
  // developer created funcitons-- MEMBER FUNCTIONS
  // --------------------------------------------------------------------------------------
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      id: uuid(),
      createdOn: new Date(),
    });
    console.log(this.props.handleAddNote, 'in the form handleaddnote')
    // here we're calling handleAddNotes, we are ASSUMING that it exists...
    this.props.handleAddNote(this.state); // this funciton will toggle depending on whether edit or no
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
    // console.log('THIS.STATE', this.state);
    // console.log('EMPTY STATE', emptyState);
    const buttonText = this.props.note ? 'Update' : 'Create';
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
          <button type="submit">{buttonText}</button>
      </form>
    );
  }
  // adding from class:
  // NoteForm.PropTypes = {
  // note: PropType.object,
  // handleAddNote: PropTypes.func,
  // handleSubmit: PropTypes.func,
  // };
}
