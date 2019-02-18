import React, { Component } from 'react';
import Header from '../Header/Header.component';
import Books from '../Books/Books.component';
import './App.component.css';
import getRequest from '../../Helpers/Request/request';
import { ALL_BOOKS_URL } from '../../config';

class App extends Component {
  state = { books: {} };

  componentDidMount() {
    getRequest(ALL_BOOKS_URL).then((books) => {
      this.setState({ books: books.data });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Header />
        <Books books={books} />
      </div>
    );
  }
}

export default App;
