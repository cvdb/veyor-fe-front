import React from 'react';
import './TagFilter.css';

class TagFilter extends React.Component {
  handleSubmitClick = () => {
    this.props.onTagsChange(this._tags.value);
  }

  render() {
    return (
      <div>
      <input className='tag-filter-input' type='text' ref={input => this._tags = input} />
      <button onClick={this.handleSubmitClick} className='button large'>Filter</button>
      </div>
    );
  }
}

export default TagFilter;

