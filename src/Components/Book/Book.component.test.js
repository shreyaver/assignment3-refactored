import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Book from './Book.component';
import mockData from '../../mockData/booksWithLiked.json';

describe('Book', () => {
  const bookData = Object.values(mockData.books)[0][0];
  it('renders without crashing', () => {
    const book = renderer.create(<Book book={bookData} handleLikeClick={jest.fn()} />).toJSON();
    expect(book).toMatchSnapshot();
  });
  it('sets correct class when book is liked', () => {
    const wrapper = shallow(<Book book={Object.assign({}, bookData, { liked: true })} handleLikeClick={jest.fn()} />);
    expect(wrapper.exists('.likedHeartIcon')).toEqual(true);
    expect(wrapper.exists('.heartIcon')).toEqual(false);
  });
  it('sets correct class when book is not liked', () => {
    const wrapper = shallow(<Book book={Object.assign({}, bookData, { liked: false })} handleLikeClick={jest.fn()} />);
    expect(wrapper.exists('.heartIcon')).toEqual(true);
    expect(wrapper.exists('.likedHeartIcon')).toEqual(false);
  });
  it('calls function passed as prop when like button is clicked', () => {
    const mockFunction = jest.fn();
    const mockHandlelike = () => mockFunction;
    const wrapper = shallow(<Book book={Object.assign({}, bookData, { liked: false })} handleLikeClick={mockHandlelike} />);
    expect(mockFunction).not.toHaveBeenCalled();
    wrapper.find('.heartIcon').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });
});
