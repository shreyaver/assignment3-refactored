import React from 'react';
import renderer from 'react-test-renderer';
import Books from './Books.component';
import mockData from '../../mockData/booksWithLiked.json';

describe('Books', () => {
  it('renders without crashing', () => {
    const books = renderer.create(<Books books={mockData.books} handleLikeClick={jest.fn()} />).toJSON();
    expect(books).toMatchSnapshot();
  });
});
