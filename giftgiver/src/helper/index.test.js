import { maxNumber } from './index';

describe('maxNumber', () => {
  describe('given an empty array', () => {
    it('returns 0', () => {
      expect(maxNumber([])).toEqual(0);
    });
  });

  describe('given an array of one number', () => {
    it('returns the one number', () => {
      expect(maxNumber([3])).toEqual(3);
    });
  });

  describe('given an array of multiple numbers', () => {
    it('returns highest number', () => {
      expect(maxNumber([ 3, 6, 1, 89 ,5 ])).toEqual(89);
    });
  });
});
