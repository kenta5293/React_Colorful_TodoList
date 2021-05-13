import React, { Component } from 'react';
import { BiX, BiCheck, BiCopy } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import './TodoItem.scss';

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked || this.props.bookmark !== nextProps.bookmark;
  }

  render() {
    const { text, checked, bookmark, id, color, onToggle, onRemove, onToggleBookmark } = this.props;

    return (
      <div className="todo-item" style={{ backgroundColor: color }}>
        <div className="bookmark top-btn" onClick={() => onToggleBookmark(id)}>
          {
            bookmark ? (
              <AiFillStar size={16} color={'#FFDA1E'} />
            ) : (
                <AiFillStar size={16} color={'#FFFFFF'} />
              )
          }
        </div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        <div className="todo-hide">
          <div className="remove todo-btn" onClick={(e) => {
            e.stopPropagation(); //onToggle 이 실행되지 않도록 함.
            onRemove(id);
          }}><BiX size={32} color={'#F94269'} /></div>
          <div className="check todo-btn" onClick={() => onToggle(id)}>
            {
              checked ? (
                <BiCheck size={32} color={'#21F68B'} />
              ) : (
                  <BiCheck size={32} color={'#FFFFFF'} />
                )
            }
          </div>
          <div className="copy todo-btn">
            <BiCopy size={24} color={'#FFFFFF'} />
          </div>
        </div>
        <div className={`checked-bg ${checked ? 'checked' : 'none'}`} style={
          checked ? ({ opacity: '1' }) : ({ opacity: '0' })
        }>
          <BiCheck size={100} color={'#21F68B'} />
        </div>
      </div>
    )
  }
}

export default TodoItem;