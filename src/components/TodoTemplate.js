import React from 'react';
import './TodoTemplate.scss';
import Header from './Header';

const TodoTemplate = ({ children, search }) => {
  return (
    <main className="main">
      <Header search={search} />
      {children}
    </main>
  );
};

export default TodoTemplate;