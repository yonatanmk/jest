import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 1;
  const expectedAction = { type: constants.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
})

it('creates an action to deposit into the balance', () => {
  const deposit = 10;
  const expectedAction = { type: constants.DEPOSIT, deposit }
  expect(actions.deposit(deposit)).toEqual(expectedAction);
})

it('creates an action to withdraw from the balance', () => {
  const withdrawal = 35;
  const expectedAction = { type: constants.WITHDRAWAL, withdrawal }
  expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
})
