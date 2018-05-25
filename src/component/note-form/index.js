import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import autoBind from './../../utils/';
import '../../../styles/main.scss';

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
    autoBind.call(this, NoteForm);
  } 
  
  // --------------------------------------------------------------------------------------
  // developer created functions-- MEMBER FUNCTIONS
  // --------------------------------------------------------------------------------------
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      id: uuid(),
      createdOn: new Date(),
    });
    this.props.handleAddNote(this.state); 
  }
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
}

