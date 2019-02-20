import axios from 'axios';
import mockBooksWithoutLiked from '../../mockData/booksWithoutLiked.json';
import mockBooksWithLiked from '../../mockData/booksWithLiked.json';
import getBooksAndLiked from './getBooksAndLiked';

describe('getBooksAndLiked()', () => {
  let getMockFunction;
  beforeAll(() => {
    getMockFunction = jest.spyOn(axios, 'get');
    getMockFunction
      .mockReturnValueOnce(Promise.resolve({ data: mockBooksWithoutLiked }))
      .mockReturnValueOnce(Promise.resolve({ data: 'stored books in database' }))
      .mockReturnValue(Promise.resolve({ data: false }));
  });
  afterAll(() => {
    getMockFunction.mockRestore();
  });
  it('returns books with liked state', async () => {
    expect(await getBooksAndLiked()).toEqual(mockBooksWithLiked);
  });
});
