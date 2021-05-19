import React, { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div>
        <input type="search" className="search-form" placeholder="Search" onChange={onSearch} />
      </div>
    );
  }
}

export default SearchForm;