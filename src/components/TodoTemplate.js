import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <main className="main">
      <header>
        <h1>Notes</h1>
      </header>
      {children}
    </main>
  );
};

export default TodoTemplate;