import React from 'react';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme'; // highlevel enzyme lets us mock react components
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './../component/dashboard';

// mounted dashboard is like a secret little browser under the hood

configureEnzyme({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  test('simple test for initial state', () => {
    const mountedDashBoard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashBoard.state('notes')).toEqual([]);
  });
  test('Dashboard should display an H1 heading saying blah blah blah', () => {
    const mountedDashBoard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashBoard.find('h1')).toEqual('text in that tag');
  });
  test('Dashboard should contain a NoteForm', () => {
    const mountedDashBoard = enzymeShallowMount(<Dashboard />);
    expect(mountedDashBoard.find('NoteForm')).toBeTruthy();
  });
  test('Expenses shoudl be added correctly to the internal state', () => {
    const mountedDashBoard = enzymeShallowMount(<Dashboard />);
    mountedDashBoard.setState({
      expenses: [
        {
          note: 'title',
          content: 'my life story',
        },
        {
          note: 'new day',
          content: 'new digs',
        },
      ],
    });
    expect(mountedDashBoard.find('notes').length).toEqual(2);
    expect(mountedDashBoard.find('p').text()).toEqual('whatever you expect to find inside that p tag');
  });
});
// recommends in this case testing after you can visualy confirm areasonably working app is working
// tohave length ddidn't seem to work for vinicio
// this shallowMount is fake mounting the whole thing-- so you can test anything you think should change 
// however try test only things you directly see in component itself --- if you want to check something you must go to a new component to see, create a new test-- so in dashboard-- know have notelist or soemthing.. if noteitem only exists in notelist--- then need make a notelist test to test... not in dashboard test file!