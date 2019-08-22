import React from 'react';
import './App.css';

import TagFilter from './components/TagFilter';
import Blurb from './components/Blurb';
import ImageScroller from './components/ImageScroller';

function App() {
  return (
    <header id="header">
    <div className='content'>
    <Blurb/>
    <TagFilter/>
    </div>
    <ImageScroller/>
    </header>
  );
}

export default App;
