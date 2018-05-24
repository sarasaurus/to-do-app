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


// vinicio added an addiotional .bind to the handlesubmit... i think maybe because hiscode is diff
  render() {
    //TODO:


// looks like these are held by dashboard? or somehwere else
  // handleShowModal
  // handleUpdateModal
  // handleCloseModal
  // this coming from dashboard

const { note, handleRemove, handleUpdateNote } = this.props;

// this is destrcutering -- everythign in note obj and adding new property editing
const showModal = () => handleUpdateNote({...note, editing: true});
// no need to bind because no onlcick input, if trying to get event.target input-- then need to bind
const hideModal = () => handleUpdateNote({...note, editing: false});

const updateAndClose = (updatedNote) => handleUpdateNote({...note, editing: false});


    return (
      // we must use className because 'class' is a JS reserved word, REACT requires us to differentiate by using className to avoid confusion
      // refactoring with vinicio's but proptypes attempt failed
      <section className="note-item">
      <strong>{this.props.title}</strong>
      <p>{this.props.content}</p>
      
      <button value={this.props.id} onClick={this.handleSubmit}>delete note</button>
      <button>Update</button>
      <button onClick={showModal}>Edit</button>
        {/* here we are setting the show value to be true or false, via our editing prop */}
      <Modal show={this.props.editing}>
      <h3>Editing {this.props.title}</h3>
      <NoteForm handleComplete={updateAndClose} note={this.props.note}/>
      {/* this will become props.children --- this is fairly uncommon but good to be familiar, mostly yuo'll build self-closing components*/}
      </Modal>
      </section>
    );
  }
// NoteItem.propTypes = {
//   note: PropTypes.func,
// }

};
export default NoteItem;
// vinicio likes this because he can easily see whats being exported