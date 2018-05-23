import React from 'react';
import uuid from 'uuid';
import autoBind from './../../utils/'; // when a folder contains an index, no need type it, npm knows to look for index

// NoteForm Component
// onComplete the NoteForm should add a note to the application state
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
    const { name, value } = event.target; // events have these properties named as such already so can destructure
    // when we create form name, and value will map back to here-- just making it simple to purposefully link these [brackets] allow it to be dynamic?
    this.setState({
      [name]: value, // this will be event.target.name
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
