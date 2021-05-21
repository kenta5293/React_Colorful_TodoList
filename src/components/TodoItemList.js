import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoItemList.scss';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove, onToggleBookmark, onToggleMenu } = this.props;

    const todoList = todos.map(
      ({ id, text, checked, bookmark, menu, color }) => (
        <CSSTransition key={id} classNames="todo-animate" timeout={{ appear: 600, enter: 600, exit: 600 }}>
          <TodoItem
            id={id}
            text={text}
            checked={checked}
            bookmark={bookmark}
            menu={menu}
            color={color}
            onToggle={onToggle}
            onRemove={onRemove}
            onToggleBookmark={onToggleBookmark}
            onToggleMenu={onToggleMenu}
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