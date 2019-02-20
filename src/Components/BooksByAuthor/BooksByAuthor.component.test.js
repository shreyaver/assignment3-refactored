import React from 'react';
import renderer from 'react-test-renderer';
import BooksByAuthor from './BooksByAuthor.component';
import mockData from '../../mockData/booksWithLiked.json';

describe('BooksByAuthor', () => {
  it('renders without crashing', () => {
    const booksByAuthor = renderer.create(<BooksByAuthor author={Object.keys(mockData.books)[0]} books={Object.values(mockData.books)[0]} handleLikeClick={jest.fn()} />).toJSON();
    expect(booksByAuthor).toMatchSnapshot();
  });
});
