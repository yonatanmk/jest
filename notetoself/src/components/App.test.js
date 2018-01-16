import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let app = mount(<App />);

  it('renders the App title', () => {
    console.log(app.debug())
    expect(app.find('h2').text()).toEqual('Note to Self');
  })

  it('renders the clear button', () => {
    expect(app.find('.btn').at(1).text()).toEqual('Clear Notes');
  })

  describe('when rendering the form', () => {
    it('creates a Form component', () => {
      expect(app.find('Form').exists());
    })

    it('creates a FormControl component', () => {
      expect(app.find('FormControl').exists());
    })

    it('creates a Submit Button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Submit');
    })
  });
});
