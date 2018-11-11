import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js'

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('When clicking the `add-gift` button', () => {
    const id = 1;

    beforeEach(() => {
      app.find('#btn-add').simulate('click');
    })

    afterEach(() => {
      app.setState({ gifts: [] });
    })

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts.length).toEqual(1);
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a 2nd new gift to `state`', () => {
      app.find('#btn-add').simulate('click');
      expect(app.state().gifts.length).toEqual(2);
      expect(app.state().gifts).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('adds a new gift to the rendered list', () => {
      const giftList = app.find('#gift-list');
      expect(giftList.children().length).toEqual(1);
    });

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true)
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      })

      it('removes the gift from `state`', () => {
        expect(app.state().gifts.length).toEqual(0);
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
