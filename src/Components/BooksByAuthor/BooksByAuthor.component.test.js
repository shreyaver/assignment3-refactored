import React from 'react';
import renderer from 'react-test-renderer';
import BooksByAuthor from './BooksByAuthor.component';
import mockData from '../../mockData';

describe('BooksByAuthor', () => {
  it('renders without crashing', () => {
    const booksByAuthor = renderer.create(<BooksByAuthor author={Object.keys(mockData)[0]} books={mockData[Object.keys(mockData)[0]]} />).toJSON();
    expect(booksByAuthor).toMatchSnapshot();
  });
});
