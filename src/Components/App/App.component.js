import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../Header/Header.component';
import Books from '../Books/Books.component';
import { LIKE_BOOK_URL } from '../../config';
import getBooksAndLiked from '../../Helpers/getBooksAndLiked/getBooksAndLiked';
import './App.component.css';

class App extends Component {
  state = {};

  async componentDidMount() {
    this.setState(await getBooksAndLiked());
  }

  handleHeaderClick = async () => {
    this.setState({ books: undefined });
    await this.componentDidMount();
  }
 
  handleLikeClick = book => async () => {
    const serverResponse = await Axios.post(`${LIKE_BOOK_URL}/${book.id}`, { liked: !book.liked });
    if ((serverResponse.data.indexOf('Book liked!') !== -1) || (serverResponse.data.indexOf('Book disliked!') !== -1)) {
      this.setState(state => ({
        books: {
          ...state.books,
          [book.Author]: state.books[book.Author].map((bookObj) => {
            if (bookObj.id !== book.id) {
              return { ...bookObj };
            }
            return { ...bookObj, liked: !bookObj.liked };
          }),
        },
      }));
    }
  };

  render() {
    const { books } = this.state;
    if (books === undefined) {
      return (
        <div className="app">
          <Header handleHeaderClick={this.handleHeaderClick} />
          <div className="loadingStatus">
            LOADING ...
          </div>
        </div>
      );
    }
    return (
      <div className="app">
        <Header handleHeaderClick={this.handleHeaderClick} />
        <Books books={books} handleLikeClick={this.handleLikeClick} />
      </div>
    );
  }
}

export default App;
