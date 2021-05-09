import React from 'react';
import './SideBar.scss';

const SideBar = ({ palette, form }) => {
  return (
    <section className="sidebar">
      <div className="form-wrapper">
        {palette}
        {form}
      </div>
    </section>
  )
};

export default SideBar;