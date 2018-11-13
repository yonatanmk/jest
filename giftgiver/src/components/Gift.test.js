import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift'

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = {
    gift: { id },
    removeGift: mockRemove,
  }
  const gift = shallow(<Gift {...props} />);

  it('renders correctly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
    expect(gift.state().person).toEqual('');
    expect(gift.state().present).toEqual('');
  });

  describe('When typing into the person input', () => {
    const person = 'Uncle';

    beforeEach(() => {
      gift.find('#input-person').simulate('change', { target: { value: person } }); // 2nd arg is simulated event object, sec 2 lec 14 7:00
    })

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  })

  describe('When typing into the present input', () => {
    const present = 'Golf Clubs';

    beforeEach(() => {
      gift.find('#input-present').simulate('change', { target: { value: present } }); // 2nd arg is simulated event object, sec 2 lec 14 7:00
    })

    it('updates the present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  })

  describe('When clicking the `Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('#btn-remove').simulate('click');
    })

    it('calls the removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalled();
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  })
})
