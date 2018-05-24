import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/main.scss';
import autoBind from '../../utils';

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
    return (
      // we must use className because 'class' is a JS reserved word, REACT requires us to differentiate by using className to avoid confusion
      // refactoring with vinicio's but proptypes attempt failed
      <section className="note-item">
      <strong>{this.props.title}</strong>
      <p>{this.props.content}</p>
      
      <button value={this.props.id} onClick={this.handleSubmit}>delete note</button>
      </section>
    );
  }
// NoteItem.propTypes = {
//   note: PropTypes.object,
// }

};
export default NoteItem;
// vinicio likes this because he can easily see whats being exported