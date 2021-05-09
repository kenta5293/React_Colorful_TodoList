import React, { Component } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import SideBar from './components/SideBar';
import Form from './components/Form';
import Palette from './components/Palette';
import TodoItemList from './components/TodoItemList';

const colors = ['#ffffff', '#f6e25d', '#f03e3e', '#12b886', '#229ae6'];

class App extends Component {
  id = 1;

  state = {
    input: '',
    todos: [],
    color: '#ffffff'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;


    return (
      <div className="App">
        <SideBar
          palette={<Palette colors={colors} selected={color} onSelect={handleSelectColor} />}
          form={
            <Form
              color={color}
              value={input}
              // onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate} />
          } />

        <TodoTemplate>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoTemplate>
      </div >
    );
  }
}


export default App;
