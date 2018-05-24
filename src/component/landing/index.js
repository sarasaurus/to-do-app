import React from 'react';
import '../../../styles/main.scss';

export default class Landing extends React.Component {
  render() {
    return (
<section className="landing">
<h1>To Do List App with React Components</h1>
  <p>
  This is a to-do list single page application built using the React library.
It uses three main components to manage content, with an _App_ component that handles routing and rendering for the whole application.  This app uses good inheritence practices, with one parent component, _Dashboard_, which manages the state of the whole application and passes that down to two child components, _noteItem_ and _noteList_.  _NoteList_ renders the _noteItems_ to the page, based on the current state of the _dashboard_ component.  Each _noteItem_ component inherits a method of the _dashboard_ component as a property, which is called when an event listener is triggered.  The method takes in the eventlistener target in the _noteitem_ component which is used to delete a note from the application's state, because _notelist_ uses the current state to render the _noteitems_ this triggers the re-rendering the _notelist_ component, and the list of items immediately reflects the state change. 
  </p>
  </section>
    );
  }
}
