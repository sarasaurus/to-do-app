import React from 'react';
import PropTypes from 'prop-types';


// modal will be a pop up editing window
class Modal extends React.Component {
  render () {
    // decdied whether show hide based on props
    const showHideClassName =  this.props.show? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}> 
      <main className='modal-main'>
      <button>close</button></main>
      </div>
    )
  }

  Modal.PropTypes = {
    show: PropTypes.bool,
  };
};

export default Modal;
