import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Books from './Books.component';
import mockData from '../../mockData';

describe('Books', () => {
  it('renders without crashing', () => {
    const books = renderer.create(<Books books={mockData} />).toJSON();
    expect(books).toMatchSnapshot();
  });
});
