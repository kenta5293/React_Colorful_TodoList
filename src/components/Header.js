import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    const { search } = this.props;
    return (
      <header>
        {search}
        <h1>Notes</h1>
      </header>
    )
  }
}

export default Header;
