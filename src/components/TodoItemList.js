import React, { Component } from 'react';
import './TodoItemList.scss';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove, onToggleBookmark } = this.props;

    const todoList = todos.map(
      ({ id, text, checked, bookmark, color }) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          bookmark={bookmark}
          color={color}
          onToggle={onToggle}
          onRemove={onRemove}
          onToggleBookmark={onToggleBookmark}
          key={id}
        />
      )
    );

    return (
      <div className="todos-wrapper">
        {todoList}
      </div>
    )
  }
}

export default TodoItemList;