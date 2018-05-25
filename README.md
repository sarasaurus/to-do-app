# To Do List App with React
**Author**: Sarah Bixler
**Version**: 1.0.1 
## Overview
This is a to-do list single page application built using the [React](https://reactjs.org/) library.
It uses three main components to manage content, with an _App_ component that handles routing and rendering for the whole application.  This app uses good inheritence practices, with one parent component, _Dashboard_, which manages the state of the whole application and passes that down to two child components, _noteItem_ and _noteList_.  _NoteList_ renders the _noteItems_ to the page, based on the current state of the _dashboard_ component.  Each _noteItem_ component inherits a method of the _dashboard_ component as a property, which is called when an event listener is triggered.  The method takes in the eventlistener target in the _noteitem_ component which is used to delete a note from the application's state, because _notelist_ uses the current state to render the _noteitems_ this triggers the re-rendering the _notelist_ component, and the list of items immediately reflects the state change. 

## Getting Started
- fork this repo
- npm i to install dependencies
- npm run watch to open a tab in your default browser which runs the app
## Architecture
This SPA is built using the [React](https://reactjs.org/) library to manage state, and components, [React Router](https://reacttraining.com/react-router/) is creating the navigational components-- allowing bookmarkable and functional URLS,
[Babel](https://www.babeljs.io)is used for _transpiling_, [Webpack](https://webpack.js.org/) is used for _bundling_, [SASS](https://sass-lang.com/) is the extension language used to add functionality to the CSS,  [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) is creating a single CSS file for [Webpack's](https://webpack.js.org/) JS file, allowing on-demand-loading of CSS and SourceMaps, [eslint](https://eslint.org/) is used for _linting_... [uuid](https://www.npmjs.com/package/uuid) is making _unique resource identifiers_. [Jest](https://github.com/facebook/jest) is used for testing with the [enzyme](http://airbnb.io/enzyme/) utility which makes it easier to to manipulate, traverse and assert the output of the [React](https://reactjs.org/) components this app is built with.


## Change Log

05-23-2018 4:59pm - Application has a form that allows users to create notes, immediately see a list of created notes and to select notes from the list to delete.

05-24-2018 4:59pm - Application has a modal component that allows users to update notes, some styling has been added
