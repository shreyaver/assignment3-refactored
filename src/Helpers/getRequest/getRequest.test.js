import axios from 'axios';
import mockPosts from '../../mockData/booksWithLiked.json';
import getRequest from './getRequest';

describe('getRequest()', () => {
  let getMockHelper;
  beforeAll(() => {
    getMockHelper = jest.spyOn(axios, 'get');
    getMockHelper.mockImplementation(() => Promise.resolve({ data: mockPosts }));
  });
  afterAll(() => {
    getMockHelper.mockRestore();
  });
  it('fetches and returns data from url', async () => {
    expect((await getRequest())).toEqual(mockPosts);
  });
});
