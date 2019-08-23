import React, { PureComponent } from 'react';
import './App.css';
import ApiClient from "./ApiClient";

import TagFilter from './components/TagFilter';
import Blurb from './components/Blurb';
import ImageScroller from './components/ImageScroller';

class App extends PureComponent {
  state = {
    tags: '',
    page: 1,
    hasNextPage: true,
    isNextPageLoading: false,
    items: []
  };

  _loadNextPage = (...args) => {
    this.setState({ isNextPageLoading: true }, () => {
      ApiClient.search(this.state.tags, this.state.page, (results) => {
        const nextPage = this.state.page < results.photos.pages ?
          results.photos.page + 1 : results.photos.page;
        this.setState(state => ({
          page: nextPage,
          hasNextPage: state.items.length < results.photos.total,
          isNextPageLoading: false,
          items: [...state.items].concat(results.photos.photo)
        }));
      });
    });
  };

  _onTagsChange = tags => {
    // NOTE: in this case we need to clear out any previously
    // loaded items.
    this.setState({tags: tags, items: []}, () => this._loadNextPage());
  };

  render() {
    const { hasNextPage, isNextPageLoading, items } = this.state;
    return (
      <header id="header">
      <div className='content'>
      <Blurb/>
      <TagFilter onTagsChange={this._onTagsChange}/>
      </div>
      <ImageScroller
      hasNextPage={hasNextPage}
      isNextPageLoading={isNextPageLoading}
      items={items}
      loadNextPage={this._loadNextPage}
      />
      </header>
    );
  }
}

export default App;
