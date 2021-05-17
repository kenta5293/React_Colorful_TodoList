import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
        <CSSTransition key={id} classNames="todo-animate" timeout={{ appear: 100, enter: 400, exit: 1200 }}>
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
        </CSSTransition>
      )
    );

    return (
      <section className="todos-wrapper">
        <TransitionGroup className="todos-wrapper" >
          {todoList}
        </TransitionGroup>
      </section>
    )
  }
}

export default TodoItemList;