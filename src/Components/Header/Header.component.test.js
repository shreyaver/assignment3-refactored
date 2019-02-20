import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './Header.component';

describe('Header', () => {
  it('renders without crashing', () => {
    const header = renderer.create(<Header handleHeaderClick={jest.fn()} />).toJSON();
    expect(header).toMatchSnapshot();
  });
  it('calls function passed as prop when clicked', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Header handleHeaderClick={mockFunction} />);
    expect(mockFunction).not.toHaveBeenCalled();
    wrapper.find('header').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });
});
