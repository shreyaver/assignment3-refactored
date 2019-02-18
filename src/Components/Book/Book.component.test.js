import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Book from './Book.component';
import mockData from '../../mockData';

describe('Book', () => {
  it('renders without crashing', () => {
    const book = renderer.create(<Book book={mockData[Object.keys(mockData)[0]][0]} index={0} />).toJSON();
    expect(book).toMatchSnapshot();
  });
  it('sets correct class when book is liked', () => {
    const wrapper = shallow(<Book book={Object.assign({}, mockData[Object.keys(mockData)[0]][0], { rating: 4.6 })} index={0} />);
    expect(wrapper.exists('.likedHeartIcon')).toEqual(true);
  });
  it('sets correct class when book is not liked', () => {
    const wrapper = shallow(<Book book={Object.assign({}, mockData[Object.keys(mockData)[0]][0], { rating: 4.4 })} index={0} />);
    expect(wrapper.exists('.heartIcon')).toEqual(true);
  });
  it('sets correct class when book is at even index', () => {
    const wrapper = shallow(<Book book={Object.assign({}, mockData[Object.keys(mockData)[0]][0], { rating: 4.6 })} index={0} />);
    expect(wrapper.exists('.bookDataEven')).toEqual(true);
  });
  it('sets correct class when book is at odd index', () => {
    const wrapper = shallow(<Book book={Object.assign({}, mockData[Object.keys(mockData)[0]][0], { rating: 4.4 })} index={1} />);
    expect(wrapper.exists('.bookDataOdd')).toEqual(true);
  });
});
