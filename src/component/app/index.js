import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './../dashboard';
import Landing from './../landing';
import '../../../styles/main.scss';

// dashboard is the main funcitonality in our code, app is now just a container for dashboard, like body tag no state!
// browser router will create of routes!
// link is just a fancy a tag and another react-router-dom component-- basically an abstracted a tag underthe hood-- to is a property on it which we pass our route to
// Route takes 'exact'-- no need set anything to it, just signifies it will match exact route ie 'dashboard'-- then sets the path, that defines our route, referenced in the link component--- this is the one that says, when we go to the path-- serve the component
// re the callback at line 29-- judy not sure exactly why we need the callback here-- can play around and see if break--- maybe its a way to pass a prop in... so say if the Dashboard Component needed a prop, you could use the callback to pass the prop in to the component
export default class App extends React.Component {
  render() {
    return (
<div className="app">
<BrowserRouter>
<div>
  <header>
    <h1>Budget tracker</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  </header>
  <Route 
    exact
    path="/"
    component={Landing}
    />
  <Route 
    exact
    path="/dashboard"
    component={Dashboard}
    />
</div>
</BrowserRouter>
  
</div>
    );
  }
}
