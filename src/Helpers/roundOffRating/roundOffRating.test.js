import roundOffRating from './roundOffRating';

describe('roundOffRating()', () => {
  it('returns rating rounded to higher first decimal place for two decimal places', () => {
    expect(roundOffRating(5.67)).toEqual(5.7);
  });
  it('returns rating rounded to lower first decimal place for two decimal places', () => {
    expect(roundOffRating(5.64)).toEqual(5.6);
  });
  it('returns rating rounded to first decimal place for integer', () => {
    expect(roundOffRating(5)).toEqual(5.0);
  });
});
