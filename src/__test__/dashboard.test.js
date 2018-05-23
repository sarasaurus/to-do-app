import React from 'react';
import {configure, mount} from 'enzyme'; // highlevel enzyme lets us mock react components
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './../component/dashboard';

// mounted dashboard is like a secret little browser under the hood

configure({ adapter: new Adapter() });

describe('Dashboard testing', ()=>{
  test('simple test', ()=>{
    const mountedDashBoard = mount(<Dashboard />);
    expect(mountedDashBoard.state('expenses')).toEqual([]);
  });
});
