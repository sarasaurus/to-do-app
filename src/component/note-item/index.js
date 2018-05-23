/*TODO: 
should display the notes content and title
should display a delete button
onClick the note should be removed from the application state*/ 

import React from 'react';
import '../../../styles/main.scss';

export default class Landing extends React.Component {
  render() {
    return (
<section className="landing">
<h1>Title of the App</h1>
  <p>
    A brief description of the to-do App
  </p>
  </section>
    );
  }
}