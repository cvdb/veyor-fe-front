import React from 'react';
import './ImageScroller.css';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";

class ImageScroller extends React.Component {
  render() {
    const { hasNextPage, isNextPageLoading, items, loadNextPage } = this.props;
    const itemCount = hasNextPage ? items.length + 1 : items.length;
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
    const isItemLoaded = index => !hasNextPage || index < items.length;

    const renderRow = ({ index, style }) => {
      let display;
      if (!isItemLoaded(index)) {
        display = <div style={style}>Loading...</div>;
      } else {
        display = <img className='scroll-image' src={items[index]} alt="" />;
      }
      return (
        <div style={style}>
        {display}
        </div>
      );
    };

    return (
      <div className="image phone">
      <div className="inner">
      <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems}>
      {({ onItemsRendered, ref }) => (
        <List height={380} itemCount={itemCount} onItemsRendered={onItemsRendered} ref={ref} itemSize={280} width={340} >
        {renderRow}
        </List>
      )}
      </InfiniteLoader>
      </div>
      </div>
  );
  }
}

export default ImageScroller;

