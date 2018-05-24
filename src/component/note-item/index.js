import React from 'react';
import '../../../styles/main.scss';
import autoBind from '../../utils';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, NoteItem);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleRemove(event.target.value);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value, 
    });
  }
  render() {
    return (
      <section className="NoteItem">
      <h1>{this.props.title}</h1>
      <p>{this.props.content}</p>
      
      <button value={this.props.id} onClick={this.handleSubmit}>delete note</button>
      </section>
    );
  }
};
