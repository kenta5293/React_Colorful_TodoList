import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi'
import './SearchForm.scss';

class SearchForm extends Component {

  render() {
    const { onSearch } = this.props;
    return (
      <div className="search-form">
        <BiSearch size={28} color={'#B8B8B8'} />
        <input type="search" className="search-input" placeholder="Search" onChange={onSearch} />
      </div>
    );
  }
}

export default SearchForm;