import React from 'react';
import { IoMdCreate } from 'react-icons/io'
import './Form.scss';

const Form = ({ value, color, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form" style={{ backgroundColor: color }}>
      <textarea value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="form-bottom">
        <div className="form-date">
        </div>
        <button className="create-button" onClick={onCreate}>
          <IoMdCreate size={20} color={'#ffffff'} />
        </button>
      </div>
    </div>
  )
}

export default Form;