import React from 'react';
import { configure as configureEnzyme, shallow as enzymeShallowMount } from 'enzyme'; // highlevel enzyme lets us mock react components
import Adapter from 'enzyme-adapter-react-16';
import Modal from './../component/modal/modal';

configureEnzyme({ adapter: new Adapter() });

describe('Modal testing', () => {
  test('Modal should contain a NoteForm', () => {
    const mountedModal = enzymeShallowMount(<Modal />);
    expect(mountedModal.find('NoteForm')).toBeTruthy();
  });
});
