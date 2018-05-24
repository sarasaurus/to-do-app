import React from 'react';
import uuid from 'uuid';
import autoBind from './../../utils/';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      id: uuid(),
      createdOn: '',
    };
    autoBind.call(this, NoteForm);
  }
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
}
