import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Axios from 'axios';
import App from './App.component';
import mockBooksWithLiked from '../../mockData/booksWithLiked.json';

jest.mock('../../Helpers/getBooksAndLiked/getBooksAndLiked', () => jest.fn().mockImplementation(() => Promise.resolve(mockBooksWithLiked)));

// testing header refresh?
// testing snapshot after loading?
let mockLikeBook;

beforeAll(() => {
  mockLikeBook = jest.spyOn(Axios, 'post');
  mockLikeBook.mockImplementation((url, likedPayload) => Promise.resolve({ data: likedPayload.liked === true ? 'Book liked!' : 'Book disliked!' }));
});
afterAll(() => {
  jest.restoreAllMocks();
});
describe('App', () => {
  it('renders for loading page', () => {
    const loadingPage = renderer.create(<App />).toJSON();
    expect(loadingPage).toMatchSnapshot();
  });

  // it('renders after data is fetched', async () => {
  //   const app = renderer.create(<App />);
  //   await app.toTree().instance.componentDidMount();
  //   expect(app.toJSON()).toMatchSnapshot();
  // });

  it('sets initial state to empty object', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().state).toEqual({});
  });

  it('sets state to fetched data after mounting', async () => {
    const wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state).toEqual(mockBooksWithLiked);
  });
});

describe('handleLikeClick()', () => {
  it('changes liked state for passed book', async () => {
    const wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount();
    const originalBook = Object.values(wrapper.instance().state.books)[0][0];
    await wrapper.instance().handleLikeClick(originalBook)();
    expect(Object.values(wrapper.instance().state.books)[0][0]).toEqual({ ...originalBook, liked: !originalBook.liked });
  });
});
