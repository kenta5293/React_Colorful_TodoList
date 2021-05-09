import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <main className="main">
      <header>
        YOU
      </header>
      {children}
    </main>
  );
};

export default TodoTemplate;