import React, { Component } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoMdCheckmark } from 'react-icons/io'
import './TodoItem.scss';

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, color, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)} style={{ backgroundColor: color }}>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        <div className="todo-hide">
          <div className="remove" onClick={(e) => {
            e.stopPropagation(); //onToggle 이 실행되지 않도록 함.
            onRemove(id);
          }}><IoMdClose size={32} /></div>
        </div>
        {
          checked ? (<div className="check-mark"><IoMdCheckmark size={32} color={'#ffffff'} /></div>) :
            (<div className="check-mark"><IoMdCheckmark size={32} color={'#000000'} /></div>)
        }
      </div>
    )
  }
}

export default TodoItem;