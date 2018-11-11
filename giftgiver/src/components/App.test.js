import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js'

const app = shallow(<App />);

describe('App', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('When clicking the `add-gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    })

    afterEach(() => {
      app.setState({ gifts: [] });
    })

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts.length).toEqual(1);
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it('adds a new gift to the rendered list', () => {
      const giftList = app.find('.gift-list');
      expect(giftList.children().length).toEqual(1);
    });
  });
})
