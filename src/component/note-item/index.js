import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/main.scss';
import autoBind from '../../utils';
import Modal from '../modal/modal';
import NoteForm from '../note-form';

/**
 * TODO: If the user double clicks on the notes content it should switch to the Edit View

* Default view
** Display the notes title, content and a delete button
* Edit View
** Show the NoteForm and a Cancel Button
** onComplete the NoteForm should update the notes title or content 
*/
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
  // handleDoubleClick(event) {
  //   event.preventDefault();
  //   this.props.handleUpdateNote(event.target.value);
  // }


  // vinicio added an addiotional .bind to the handlesubmit... i think maybe because hiscode is diff
  render() {
    // TODO:


    // looks like these are held by dashboard? or somehwere else
  // handleShowModal
  // handleUpdateModal
  // handleCloseModal
  // this coming from dashboard

    const { note, handleRemove, handleUpdateNote } = this.props;

    console.log('note-item props--note', note);

    // this is destrcutering -- everythign in note obj and adding new property editing
    const showModal = () => handleUpdateNote({ ...note, editing: true });
    // no need to bind because no onlcick input, if trying to get event.target input-- then need to bind
    const hideModal = () => handleUpdateNote({ ...note, editing: false });

    const updateAndClose = updatedNote => handleUpdateNote({ ...updatedNote, editing: false });


    return (
      // we must use className because 'class' is a JS reserved word, REACT requires us to differentiate by using className to avoid confusion
      // refactoring with vinicio's but proptypes attempt failed
      <section className="note-item">
      <strong>{note.title}</strong>
      <p value = {note} onDoubleClick={showModal}>{note.content}</p>
      
      <button value={note.id} onClick={this.handleSubmit}>delete note</button>
      <button>Update</button>
      {/* <button onClick={showModal}>Edit</button> */}
        {/* here we are setting the show value to be true or false, via our editing prop */}
      <Modal show={note.editing} handleClose={hideModal}>
      <h3>Editing {note.title}</h3>
      <NoteForm handleAddNote={updateAndClose} note={note}/>
      {/* this will become props.children --- this is fairly uncommon but good to be familiar, mostly yuo'll build self-closing components */}
      </Modal>
      </section>
    );
  }
// NoteItem.propTypes = {
//   note: PropTypes.func,
// }
}
export default NoteItem;
// vinicio likes this because he can easily see whats being exported
