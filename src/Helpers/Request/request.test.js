import axios from 'axios';
import mockPosts from '../../mockData';
import getRequest from './request.js';

describe('getRequest()', () => {
  let getMockHelper;
  beforeAll(() => {
    getMockHelper = jest.spyOn(axios, 'get');
    getMockHelper.mockImplementation(() => Promise.resolve({ data: mockPosts }));
  });
  afterAll(() => {
    getMockHelper.mockRestore();
  });
  it('fetches data', async () => {
    expect((await getRequest()).data).toEqual(mockPosts);
  });
});
