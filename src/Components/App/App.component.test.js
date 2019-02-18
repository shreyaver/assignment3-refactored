import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.component';

describe('App', () => {
  it('renders without crashing', () => {
    const landingPage = renderer.create(<App />).toJSON();
    expect(landingPage).toMatchSnapshot();
  });
});
