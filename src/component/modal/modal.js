import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';


// modal will be a pop up editing window
class Modal extends React.Component {
  render () {
    // decdied whether show hide based on props
    const showHideClassName =  this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}> 
      <main className='modal-main'>
      <button onClick={this.props.handleClose}>close</button>
      {this.props.children}
      {/* renders everything inside the model tag where it's rendered, see note-item */}
      </main>
      </div>
    )
  }

  // Modal.PropTypes = {
  //   show: PropTypes.bool,
 //   handleclose: PropTypes.func,
  //   children: PropTypes.node,
  // };
};

export default Modal;
