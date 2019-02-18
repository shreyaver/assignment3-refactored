import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.component';
import mockBooks from '../../mockData';
import axios from 'axios';

describe('App', () => {
  let getMock;
  beforeAll(() => {
    getMock = jest.spyOn(axios, 'get');
    getMock.mockImplementation(() => Promise.resolve({ data: mockBooks }));
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('renders without crashing', () => {
    const landingPage = renderer.create(<App />).toJSON();
    expect(landingPage).toMatchSnapshot();
  });
});
