import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/main.scss';
import autoBind from '../../utils';
import Modal from '../modal/modal';
import NoteForm from '../note-form';


class NoteItem extends React.Component {
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

    const { note, handleRemove, handleUpdateNote } = this.props;

    console.log('note-item props--note', note);

    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });
    const updateAndClose = updatedNote => handleUpdateNote({ ...updatedNote, editing: false });


    return (

      <section className="note-item">
      <strong>{note.title}</strong>
      <p value = {note} onDoubleClick={showModal}>{note.content}</p>
      
      <button value={note.id} onClick={this.handleSubmit}>delete note</button>
      <button>Update</button>
      <Modal show={note.editing} handleClose={hideModal}>
      <h3>Editing {note.title}</h3>
      <NoteForm handleAddNote={updateAndClose} note={note}/>
      </Modal>
      </section>
    );
  }
}
export default NoteItem;

